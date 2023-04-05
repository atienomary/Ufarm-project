const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")

const register = require("../models/registerModel")

router.get("/register",(req,res)=>{
    res.render("register")
  });

  router.post("/register", async(req,res) =>{
    try{
        const register = new Register(req.body);
        await register.save()
        res.redirect("/students")
        console,log(req.body)
    }
    catch(err){
        console.log(err)
    }
  })
//   we redirect to paththen render a file
router.get("/students",connectEnsureLogin.ensureLoggedIn(), async(req,res) =>{
    try{
        let items = await Register.find();
        // console.log(items)
        let fees = await Register.aggregate([
            {
                "$group":{_id:"$all",
                totalFees: {$sum: "$fees"} }
            }
        ])    


        res.render("students",{students: items, total: fees[0]})
    }
    catch(err){
        console.log(err)
        res.send("failed to retrive students details")
    }
});

router.post("/students/delete", async(req,res) =>{
    try{
        // deleteOne is an inbuilt record in express
        await Register.deleteOne({_id:req.body.id});
        res.render("back")
    }
    catch(err){
    console.log(err)
    }
})





module.exports = router   