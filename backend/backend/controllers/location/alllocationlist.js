const db = require("../../db/conn");

const alllocationlist= async (req, res) => {
    try {
        db.query('SELECT * FROM location WHERE isDelete = 0', (error, data) => {
            if (error) {
                res.status(502).send({ message: error.message })
            } else {
                res.status(200).send({message:data})
            }
        })
    } catch (error) {
        res.status(400).send({ message:  "error occurs" })
    }
}

module.exports= alllocationlist;
