const db= require("../../db/conn");
const getmanagecustomers= async(req,res)=>{
    db.query("SELECT * FROM users WHERE user_id= '"+req.body.user_id+"'",(err,data)=>{
        if(err){
            res.send({message:err.message})
        }else{
            res.send({data:data})
        }
    })
}
module.exports= getmanagecustomers;