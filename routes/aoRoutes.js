const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")

router.get("/aoDash",connectEnsureLogin.ensureLoggedIn(), (req,res)=>{
    res.render("aoDash")
  });


  module.exports = router