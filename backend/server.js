require('dotenv').config()
const express =require("express");
const mongoose=require('mongoose');
const mongoDB = require("./db/db");
const app=express()

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