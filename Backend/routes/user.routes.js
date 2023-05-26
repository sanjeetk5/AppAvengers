const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {UserModel} = require("../models/User.model");

const user = express.Router();

user.post("/register", async (req, res) => {
 
  try {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 7, async (err, hash) => {
      if (hash) {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.status(201).send({ "success": "user has been created" });
      } else {
        res.status(501).send({ "error": "failed to create user" });
      }
    });
  } catch (err) {
    res.status(501).send({"error" : "failed to create the user"})
  }
});

user.post("/login" , async(req,res)=>{
    try{
        const data = await UserModel.findOne({email:req.body.email})
        bcrypt.compare(req.body.password , data.password , function(err,result){
            if(result){
                const token = jwt.sign({authorID:data._id} , "blogscap");
                res.status(202).send({"success" : "login successfull" , "token" : token })
            }else{
                res.status(404).send({"error" : "wrong password"})
            }
        })
    }catch(error){
        res.status(404).send({"error" : "user dont exist"})
    }
})

module.exports = {
    user
}
