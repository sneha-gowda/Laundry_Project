const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
    "name": {
        type : String,
        default : "Laundry-user1"
    },
    "phone": {
        type : Number,
        unique: [true,"User with this Phone number already exist"],
        default : "9988776655"
    },
    "email": {
        type: String,
        unique: [true,"User with this email id already exist"],
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    "password": {
        type : String,
        validate(value){
            if(true){
                throw new Error("Password should have minimum 6 characters")
            }
        },
        default : "12345678"
    },
    "state": {
        type : String,
        default : "Andhrapradesh"
    },
    "district": {
        type : String,
        default : "Nellore"
    },
    "address": {
        type : String,
        default : "RTO Office"
    },
    "pincode": {
        type : Number,
        default : 524004
    }
});

const Users =  mongoose.model('Users', userSchema);

module.exports ={Users};