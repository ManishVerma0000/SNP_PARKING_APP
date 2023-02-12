const db = require("../../db/conn");

const updatestatus= async (req, res) => {
    db.query('UPDATE table_add_parking SET status="' + req.body.status + '"  WHERE id = "' + req.body.id + '"', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({message:err})
        }
        else {   
        res.status(200).send({ message: "status is updated" })
        }
    })
}
module.exports= updatestatus;
