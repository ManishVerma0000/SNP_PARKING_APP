const db= require("../../db/conn");
const locationlist= async(req,res)=>{
    db.query("SELECT location,id FROM location",(err,data)=>{
        if(err){
            res.send({message:"error is occurs"})
        }else{
            res.send({data:data})
        }
    })
}
module.exports= locationlist;