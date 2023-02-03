const user=require("../Models/UserInfo")
const mongoose=require("mongoose");
const { body, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");  
const { findOne } = require("../Models/UserInfo");
const jwtSecret="MynameisEndtoEndYoutubeChannel$#"

const createUser = async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }   
        let email=req.body.email;
        let userinf=await user.findOne({email:email})
        if(userinf){
          return res.status(400).json({exist:true})
        }
        const salt=await bcrypt.genSalt(10);
        let secPassword=await bcrypt.hash(req.body.password,salt)
    
        try {
          await user.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
          })
          let email = req.body.email;
          let userData = await user.findOne({email:email});
          const data={
            user:{
              id:userData.id
            }
          }
          const authToken=jwt.sign(data,jwtSecret)
          return res.json({ success: true, authToken:authToken});
        } catch (error) {
          console.log(error);
          res.status(400).json({ success: false });
        }
    } catch (error)
    {
        console.log(error);
    }
        
};
const loginUser= async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }  
    let email = req.body.email;
    try {
      let userData = await user.findOne({email:email});
      if (!userData) {
        return res.status(400).json({ error: "Try loging with correct credentials" });
      }
      const pwdCompare=await bcrypt.compare(req.body.password,userData.password)

      if (!pwdCompare) {
        return res.status(400).json({ error: "Try loging with correct credentials" });
      }
      const data={
        user:{
          id:userData.id
        }
      }
      const userName=userData.name;
      const authToken=jwt.sign(data,jwtSecret)
      return res.json({ success: true, authToken:authToken,userName:userName});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }

module.exports={createUser,loginUser};