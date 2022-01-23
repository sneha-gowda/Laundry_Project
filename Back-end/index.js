const express = require("express");
const app=new express();
const jwt= require('jsonwebtoken');
const bcrypt=require('bcrypt');
require("./databaseConnection.js");
const userModel=require("./models/user.js")
const orderModel=require("./models/order.js")
const productModel=require("./models/product.js")

const Access_Token_Secret = '165a6629b602ad71a1ddac31b9dd60baf241f357778ad1748a2182db875cc80fb81401d64d1b2e4df85a550efb34673102a48ce0ddb7c849a4245b0809eed07d';

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 


// collections

user = userModel.Users;
order= orderModel.Orders;
product=productModel.Products;

// API

// ---------------------------------------Logins --------------------------------

app.post("/api/login",async(req, res)=>{
    userDetails = req.body.user;
    userID=userDetails.userID;
    reqPassword=userDetails.password;
    let query={}
    if(isNaN(userID)){
        query={"email":userID}
    }
    else{
        query={"phone":userID}
    }
    user.findOne(query).then((result)=>{
        const hashPassword = result.password;
        bcrypt.compare(reqPassword, hashPassword).then((outputofCompare) => {
            if (outputofCompare) {
                const user = { userID: result._id }
                const token = jwt.sign(user, Access_Token_Secret)
                res.status(200).json({
                    token: token,
                    message: "Succesful"
                })
            }
            else {
                res.status(403).send("Invalid password")
            }
        }).catch((err)=>{
            res.status(400).json({message:err})
        })
    })
});


// --------------------------------------Register--------------------------------

app.post('/register',async(req,res)=>{
    try {
        userDetails = req.body.user;
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        userDetails.password = hashPassword
        doc1 = new user(userDetails)
        doc1.save().then(result => {
            res.status(200).send("Registered")
        }).catch(error => {
            res.status(400).send(error)
        })
    } catch (err) {
        res.status(500).send("Server error")
    }
});