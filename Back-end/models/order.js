const mongoose =  require("mongoose");
const validate = require("validator");

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
    "Total Items" :{

    },

    "Price": {
        type : Number
    },

    "Ordered Items": [
        {
            "product" :{ 
                "type": String
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

});

const Orders =  mongoose.model('Orders', orderSchema);

module.exports ={Orders};