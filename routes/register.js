const express = require('express');
const router = express.Router();

const register = require("../models/registerModel")

router.get("/register",(req,res)=>{
    res.render("register")
  });

  router.post("/register", async(req,res) =>{
    try{
        const require = new Register(req.body);
        await register.save()
        res.redirect("/farmerOne")
        console,log(req.body)
    }
    catch(err){
        console.log(err)
    }
  })
//   we redirect to paththen render a file
router.get("/farmerOne", async(req,res) =>{
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
        res.send("failed to retrive farmerOne details")
    }
});

router.post("/farmerOne/delete", async(req,res) =>{
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