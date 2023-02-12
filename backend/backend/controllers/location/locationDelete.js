const db = require('../../db/conn')

const locationDelete=(req,res)=>{

    db.query('UPDATE location SET isDelete = 1 WHERE id = "'+req.body.id+'"', (err,data)=>{
     if(err){
         //console.log('testing')
         res.status(500).send({message:err})
         return;
     }
     {
         res.status(200).send({data:data})
         return;
     }
    })
 
 }


 module.exports = locationDelete;

