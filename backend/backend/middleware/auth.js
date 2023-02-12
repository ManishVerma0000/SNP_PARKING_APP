const jwt= require("jsonwebtoken");
const db= require("../db/conn");
const cookieParser= require("cookie-parser")

const auth= async(req,res,next)=>{
    try {
        const token= res.cookies.jwt;
        console.log(token,"this is the token")
        const verifyuser= await jwt.verify(token,"mynameismobappssolutions@gmail.com");
        console.log(verifyuser);
        next();


    } catch (error) {
        res.send({message:error.message})
        console.log(error)
    }

}
module.exports= auth;