const mongoose = require("mongoose")
const DB ="mongodb+srv://Sneha:laundryproject@cluster0.ucp6o.mongodb.net/Laundry?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 }).then(()=>{
    console.log("connection established")
}).catch(err=>{
    console.log(err)})

