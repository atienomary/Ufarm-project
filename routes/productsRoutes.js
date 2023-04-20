const express = require('express');
const router = express.Router();
const multer = require("multer")

let storage = multer.diskStorage({destination:"/public/images", filename:(req,file,cb)=>{cb(null,file.originalname)}})
let imageupload = multer({storage:storage})


router.get("/products",(req,res)=>{
    res.render("products")
  })
// node sees files as modules
module.exports = router