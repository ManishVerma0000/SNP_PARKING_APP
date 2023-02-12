const db = require('../../db/conn')

const parkingDelete=(req,res)=>{

    db.query('UPDATE table_add_parking SET isDelete = 1 WHERE id = "'+req.body.id+'"', (err,data)=>{
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


 module.exports = parkingDelete;
