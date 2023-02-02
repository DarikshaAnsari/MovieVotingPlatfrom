require('dotenv').config()
const express =require("express");
const mongoose=require('mongoose');
const mongoDB = require("./db/db");
const app=express()


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept");
      next();
    }
  )
app.use(express.json());
app.use('/api',require("./Routes/Routes"))


const start=async ()=>{
    try {
    await mongoDB();
    app.listen(process.env.PORT,()=>{
        console.log('listening on port',process.env.PORT);
    })
} catch (error) {
    console.log(error);
}}

start()