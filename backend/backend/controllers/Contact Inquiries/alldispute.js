const db = require("../../db/conn");
const alldispute=async (req, res) => {
    try {
        db.query('SELECT * FROM  table_contact_inquiries', (error, data) => {
            if (error) {
                res.status(502).send({ message: "no data is found" })
            } else {
                res.status(200).send({ message: data })
            }
        })
    } catch (error) {
        res.status(400).send({ message: "unable to load all the queries" })
    }
}
module.exports= alldispute;