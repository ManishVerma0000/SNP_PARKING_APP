const db = require('../../db/conn');

const getLocationByid = (req,res)=>{
    db.query('SELECT * FROM location WHERE id = "'+req.body.id+'"',(err,data)=>{
        if(err){
            res.status(500).send({message:err})
        }
        else{
            res.status(200).send({data:data})
        }
    })
}

module.exports = getLocationByid;