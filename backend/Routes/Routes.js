const express = require("express");
const router = express.Router();
const ser = require("../Models/UserInfo");
const { body, validationResult } = require("express-validator");
const {createUser,loginUser} = require('../Controllers/controller');
router.post("/createuser",  [body("email").isEmail(),body("name").isLength({ min: 5 }),body("password", "Incorrect password").isLength({ min: 5 })],createUser);
router.post("/loginuser",[body("email").isEmail(),body("password", "Incorrect password").isLength({ min: 5 })],loginUser)
module.exports=router;