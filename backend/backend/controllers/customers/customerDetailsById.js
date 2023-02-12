const db = require('../../db/conn')

const getCustomerDetailsById = (req,res)=>{
    db.query('SELECT * FROM users WHERE id = "'+req.body.id+'"',(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send({
                message:err
            })
        }
        else{
            res.status(200).send(data)
        }
    })

}

module.exports = getCustomerDetailsById;