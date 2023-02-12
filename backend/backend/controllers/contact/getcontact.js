const db = require("../../db/conn");

const getContact=  async(req,res)=>{
    try {
        db.query("SELECT * FROM contact",(err,data)=>{
            if(err){
                res.status(401).send({message:"not found"})
            }else{
                res.send(data)
            }
        })
    } catch (error) {
        
    }
}
module.exports= getContact;
