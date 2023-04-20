const express = require('express');
const router = express.Router();
const multer = require("multer")

let storage = multer.diskStorage({destination:"/public/images", filename:(req,file,cb)=>{cb(null,file.originalname)}})
let upload = multer({storage: storage});

router.get("/homepage", (req,res)=>{
    res.render("homepage")
  });  
 
// node sees files as modules
module.exports = router