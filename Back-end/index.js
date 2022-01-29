const express = require("express");
const app=new express();
const jwt= require('jsonwebtoken');
const bcrypt=require('bcrypt');
require("./DatabaseConnection.js");
const userModel=require("./models/user.js")
const orderModel=require("./models/order.js")
const productModel=require("./models/product.js")

const Access_Token_Secret = '165a6629b602ad71a1ddac31b9dd60baf241f357778ad1748a2182db875cc80fb81401d64d1b2e4df85a550efb34673102a48ce0ddb7c849a4245b0809eed07d';

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))


// collections
user = userModel.Users;
order= orderModel.Orders;
product=productModel.Products;

app.listen(8006,()=>{
    console.log("imlistening")
})
app.get('/',(req,res)=>{
    res.send("Server  connected")
})

// ---------------------------------------Logins --------------------------------

app.post("/login",async(req, res)=>{
    userDetails = req.body;
    userID=userDetails.userID;
    reqPassword=userDetails.password;
    let query={}
    if(isNaN(userID)){
        query={"email":userID}
    }
    else{
        query={"phone":userID}
    }
    console.log(query)
    user.findOne(query).then((result)=>{
        if(result==null){
            console.log("fail")
            res.status(400).json({message:"User not found"})
        }
        else{
            const hashPassword = result.password;
            const userName=result.name
            bcrypt.compare(reqPassword, hashPassword).then((outputofCompare) => {
                if (outputofCompare) {
                    const user = { userID: result._id }
                    const token = jwt.sign(user, Access_Token_Secret)
                    userOrders=order.find({userId: result._id}).then(result => {
                        console.log("s")
                        res.status(200).json({
                            token: token,
                            userName: userName,
                            orders: result,
                        })
                    }).catch(err => {
                        console.log("f")
                        res.status(400).send(err)
                    })
                }
                else {
                    res.status(403).send("Invalid password")
                }
            }).catch((err)=>{
                res.status(400).json({message:err})
            })
    }
    })
});


// --------------------------------------Register--------------------------------

app.post('/register',async(req,res)=>{
    try {
        userDetails = req.body;
        console.log(userDetails)
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        userDetails.password = hashPassword
        doc1 = new user(userDetails)
        console.log(userDetails)
        doc1.save().then(result => {
            console.log("sucess")
            res.status(200).json({"message":"Sucess"})
        }).catch(error => {
            console.log()
            res.status(400).send(error)
        })
    } catch (err) {
        console.log("s")
        res.status(500).send(err)
    }
});


// -----------------------------the validates the token from user----------------------
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) {
        return res.status(403).send("Not authorized")
    }
    else {
        jwt.verify(token, Access_Token_Secret, (err, userDetails) => {
            if (err) {
                return res.status(403).send("Expired Token")
            }
            else {
                user.find({ _id: userDetails.userID }).then(result => {
                    req.user = userDetails
                    next()
                }).catch(err => {
                    console.log("token erre")
                    res.status(400).send("User not found")
                })

            }
        })
    }
}

// --------------------------GET request--------------------------------------------

app.get("/products", authenticateToken,async (req,res)=>{
    product.find().then(result =>{
        res.status(200).json({
            product: result
        })
    }).catch(err =>{
        res.status(500).send(err)
    })
    
})

// --------------------------POST request to save order ------------------------------
app.post("/order", authenticateToken ,async(req,res)=>{
    const date = new Date();
    const orderDetails=req.body;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const orderDate=`${date.getDate()} ${monthNames[date.getUTCMonth()]} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`

    orderdoc={
        "userId": req.user.userID,
        "Order Date and Time":orderDate,
        "Total Items":orderDetails.totalItems,
        "Price":orderDetails.price,
        "Status": "Washed",
        "orderDatail": orderDetails.orderDatail,
    }
    console.log("hii")
    document=new order(orderdoc);
    document.save().then(result=>{
        console.log(result.orderDatail, orderDetails.orderDatail)
        res.status(200).send(result)
    }).catch(err=>{
        console.log(err)
        res.status(400).send(err)
    })
}) 


// ------------------------------DELETE ORDER------------------------------------
app.put("/cancel", authenticateToken ,async(req, res)=>{
   
    orderID = req.body.order_id;
    console.log(orderID)
    order.findOneAndUpdate({_id:orderID},{"Status":"Cancelled"}).then(result=>{
        console.log(orderID,result)
        res.status(200).send("Updated")
    }).catch(err=>{
        console.log(err)
        res.status(400).json({"message":err})
    })
})