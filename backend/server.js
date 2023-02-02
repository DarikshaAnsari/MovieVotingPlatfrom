require('dotenv').config()
const express =require("express");
const mongoose=require('mongoose');
const mongoDB = require("./db");
const app=express()

app.use(express.json());
app.use('/api',require("./Routes/Routes"))
try {
    mongoDB();
    app.listen(process.env.PORT,()=>{
        console.log('listening on port',process.env.PORT);
    })
} catch (error) {
    console.log(error);
}