const express = require('express');
const router = express.Router();


router.get("/products",(req,res)=>{
    res.render("products")
  })
// node sees files as modules
module.exports = router