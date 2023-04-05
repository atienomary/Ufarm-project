const express = require('express');
const router = express.Router();

const register = require("../models/registerModel")

router.get("/login", (req,res)=>{
    res.render("login")
});


router.post("/login",passport.authenticate("local",{failureRedirect: "/login"}), async(req,res)=>{
    req.session.user = req.user
    let userExist = await User.findOne({username: req.user.username,password: req.user.password});
    console.log("this user exists", userExist)
    console.log("this is the user session", req.session)
    // res.redirect("/student") 
    if(req.user.role == "ao" && userExist){
        res.redirect("/aodash")
    }
    else if(req.user.role == "uf" && userExist){
        res.redirect("/ufdash")
    }
    else if(req.user.role == "fo" && userExist){
        res.redirect("/fodash")
    }
    else(res.send("you are not registered"))
})


router.post("/logout", (req,res)=>{
    if(req.session){
        req.sesssion.destroy((error)=>{
            if(error){
            res.status(400).send("unable to log out user")
        }else{
            return res.redirect("/login")  

        }    
        
    })
    }
})

module.exports = router