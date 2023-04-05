const express = require('express');
const router = express.Router();


router.get("/homepage",(req,res)=>{
    res.render("homepage")
  })
// node sees files as modules
module.exports = router