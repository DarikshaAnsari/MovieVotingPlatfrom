require('dotenv').config()
const mongoose=require("mongoose");
mongoose.set("strictQuery",false)


const mongoDB=async()=>{
    return  mongoose.connect(process.env.MONGOURI,{
        useNewUrlParser:true,
})
}
module.exports=mongoDB;