const user = require("./models/user");
const product = require("./models/product");
const order = require("./models/order"); 

const testUser =  new user({
    name : "User1",
    phone : 123456789,
    email : "user1@gmail.com",
    password : "user1_password",
    state : "Karnataka",
    district : "Udupi",
    address : "Post Office",
    pincode : 56456
});

testUser.save().then(doc => {
    console.log(doc);
}).catch(err=>{
    console.log(err)
})

const testOrder =  new order({
    status: "PickedUp" ,
    userId: {
        id_ : 7895301458630
    },
    userPhoneNumber: 9512357468,
    storeLocation: "HSR Layout",
    storeAddress: "Near Police Station.",
    Phone: "+91 16116519811",
    orderedItems: [{
        productId: {
            _id : 16511651612561
        },
        quantity: 5,
        price: 5 * 20
    }],
    subTotal: 5 * 20,
    total: (5 * 20) + 90
});

testOrder.save().then(doc => {
    console.log(doc);
}).catch(err=>{
    console.log(err)
});

const testProduct =  new product({
    price : 20
});

testProduct.save().then(doc => {
    console.log(doc);
}).catch(err=>{
    console.log(err)
});