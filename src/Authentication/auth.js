const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

const authenticate =async function (req,res,next){
    let x=req.headers['x-auth-token']
  // console.log(x)
  if(!x){
    return res.send("header missing")
  }
  let decodedToken = jwt.verify(x, "functionup-californium-very-very-secret-key")
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" })
  next()
}
module.exports.authenticate=authenticate;
