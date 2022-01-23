const mongoose = require("mongoose");
const validator = require("validator")

const userSchema =  new mongoose.Schema({
    "name": {
        type : String,
        required: true,
        default : "Laundry-user1"
    },
    "phone": {
        type : String,
        unique: [true,"User with this Phone number already exist"],
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value) ) {
                throw new Error("Invalid Phone")
            }
        }
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
        required: true,
        validate(value){
            if(value.length<6){
                throw new Error("Password should have minimum 6 characters")
            }
        },
    },
    "state": {
        type : String,
        required: true,
        default : "Andhrapradesh"
    },
    "district": {
        type : String,
        required: true,
        
    },
    "address": {
        type : String,
        required: true,
        
    },
    "pincode": {
        type : Number,
        required: true,
       
    }
});

const Users =  mongoose.model('Users', userSchema);

module.exports ={Users};