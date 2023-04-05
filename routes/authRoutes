const express = require('express');
const router = express.Router();
const passport = require("passport")
// imported model
const User = require("../models/userModel")

router.get("/login",(req,res)=>{
    res.render("login")
  });

router.post("/login",passport.authenticate("local",{failureRedirect: "/login"}), async(req,res)=>{
    req.session.user = req.user
    let userExist = await User.findOne({username: req.user.username, password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session", req.session)
    res.redirect("/students")
})  


module.exports = router 
