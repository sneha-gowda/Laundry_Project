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
        type : Number
    },

    "Price": {
        type : Number
    },

    "orderDatail": [
        {
            "Item" :{ 
                "type": String
             },
            "quantity" :{
                type : String
            },
            "TpriceI" : {
                type : Number
            },
            "service":{
                type:Array
            }
        }
    ]

});

const Orders =  mongoose.model('Orders', orderSchema);

module.exports ={Orders};