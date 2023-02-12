const jwt= require("jsonwebtoken");
const { pass } = require("../../config/config");
const db= require("../../db/conn");
const bcrypt= require("bcryptjs");
const bodyParser = require('body-parser');
const router = require("../../routes/route");
const cookieParser= require("cookie-parser");

const key= "mynameismobappssolutions@gmail.com"

const loginuser1= async(req,res)=>{
    const email= req.body.email;
    const password= req.body.password;
    if(!email||!password){
        res.send({message:"please enter the valid creditinals"})
    }else{
        db.query('SELECT * FROM users WHERE email= "'+req.body.email+'"',(err,data)=>{
            if(err){
                res.send({message:"errror is occured"})
            }else{
                
             const hashedpassword= bcrypt.compare(password,data[0].password);
             if(!hashedpassword){
                res.send({message:"plese enter the valid password"})
             }else{const accesstoken= jwt.sign({user_id:data[0].id},key);
                console.log(accesstoken);
             res.cookie("jwt",accesstoken,{expires:new Date(Date.now()+7*24*60*60*100),
            httpOnly:true});
                // res.send({message:"login "});
                res.send({message:"login"})
             }
            }
        })
    }
}
module.exports= loginuser1;
