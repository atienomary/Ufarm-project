const express = require('express');
const router = express.Router();


router.get("/cart",(req,res)=>{
    res.render("cart")
  })
// node sees files as modules
module.exports = router