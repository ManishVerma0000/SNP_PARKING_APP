const db = require("../../db/conn")

const notificationDelete = (req,res)=>{
    db.query('UPDATE notificationas set isDelete = 1 WHERE id = "'+req.body.id+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
        }
        else{
            res.status(200).send({
                success: true,
                message: 'Data Deleted Successfully',
                data: data
            })        
        }
    })
}


module.exports  = notificationDelete;