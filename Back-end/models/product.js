const mongoose =  require("mongoose");

const productSchema =  new mongoose.Schema({
    "Price" :{
        type : Number
    },

    "Product Name" : {
        type : String
    },

    "Image URL" : {
        type : String
    }
    
});

const Products =  mongoose.model('Products', productSchema);

module.exports ={Products};