const db = require("../../db/conn");

const favoriteLocation = (req,res)=>{
    db.query('UPDATE table_add_parking SET favorite="' + req.body.favorite + '"  WHERE id = "' + req.body.id + '"', (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message:err
            })
        }
        else {   
        res.status(200).send({ 
            success: true,
            message: "status is updated",
            data:data
         })
        }
    })
}

module.exports = favoriteLocation;