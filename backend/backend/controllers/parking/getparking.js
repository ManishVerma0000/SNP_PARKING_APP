const db = require("../../db/conn");
const getparking= async (req, res) => {
    try {
        db.query("SELECT a.*, b.location  FROM table_add_parking a INNER JOIN location b ON a.location_id = b.id WHERE a.isDelete = 0", (error, data) => {
            if (error) {
                res.send({ message: "no data is found" })
            } else {
                res.send({ message:data })
            }
        })
    } catch (error) {
        res.send({ message: "internal server error occured " })
    }
}
module.exports= getparking;
