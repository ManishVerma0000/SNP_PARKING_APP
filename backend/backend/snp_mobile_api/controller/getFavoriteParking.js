const db = require("../../db/conn");

const getFavoriteParking = (req,res)=>{
    db.query('SELECT parking_name FROM table_add_parking WHERE favorite = 1',(err,data)=>{
        if(err){
            res.status(500).send({
                success:false,
                message:err
            })
        }
        else{
            res.status(200).send({
                success: true,
                message: 'Getting Data Successfully',
                data:data
            })
        }
    })
}

module.exports = getFavoriteParking;