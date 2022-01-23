const mongoose =  require("mongoose");
const validate = require("validate");

const user = require("./user.js");
const product = require("./product.js");

const orderSchema =  new mongoose.Schema({
    "Status": {
        type : String
    },
    userId : { 
        "type": mongoose.Schema.Types.ObjectId,
        "ref": "user"
     },
     "Order Date and Time": {
        type : String
     },
    // "Store Location": {
    //     type : String,
    //     default : "Jp Nagar"
    // },
    // "Store Address": {
    //     type : String,
    //     default : "Near Phone booth , 10th road."
    // },
    // "Phone": {
    //     type : Number,
    //     default : 9999999999
    // },
    "Total Items" :{

    },

    "Price": {
        type : Number
    },

    "Ordered Items": [
        {
            "product" :{ 
                "type": mongoose.Schema.Types.ObjectId,
                "ref": "product"
             },
            "quantity" :{
                type : Number
            },
            "price" : {
                type : Number
            },
            "service" :{
                type : String
            }
        }
    ]
    
    // // ,
    // "total": {
    //     type : Number
    // }
});

const Orders =  mongoose.model('Orders', orderSchema);

module.exports ={Orders};