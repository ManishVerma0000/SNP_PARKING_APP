const db = require("../../db/conn");
const getprofileofadmin= async(req,res)=>{
    try {
        db.query("SELECT * FROM admin ", (err,data)=>{
            if(err){
                res.status(502).send({message:"error"})
            }else{                 
                if(data[0]==null){ res.send({message:"no data found"})

                }else{
                    res.status(200).send({data:data})
                }               
            }
        })

    } catch (error) { 
        res.status(400).send({message:"server errror occurs"})
    }
}
module.exports= getprofileofadmin;
