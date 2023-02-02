require('dotenv').config()
const mongoose=require("mongoose");

const mongoDB=async()=>{
    await mongoose.connect(process.env.MONGOURI,{useNewUrlParser:true},async(err,res)=>{
        if(err) console.log(err);
        else {
            console.log("connected");
        }
});
}
module.exports=mongoDB;