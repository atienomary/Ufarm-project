const express = require('express');
const router = express.Router();


router.get("/payments",(req,res)=>{
    res.render("payments")
  })
// node sees files as modules
module.exports = router