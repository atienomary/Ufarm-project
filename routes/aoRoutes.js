const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const multer = require("multer")

let storage = multer.diskStorage({destination:"/public/images", filename:(req,file,cb)=>{cb(null,file.originalname)}})
let imageupload = multer({storage:storage})


router.get("/aoDash",connectEnsureLogin.ensureLoggedIn(), (req,res)=>{
    res.render("aoDash")
  });

  module.exports = router