const db = require("../../db/conn");

const getprivacypolicy= async (req, res) => {
    try {
        db.query("SELECT * FROM table_privacy_policy ", (err, data) => {
            if (err) {
                res.status(502).send({ message: "unable to load data from databse" })
            } else {
                res.status(200).send(data)
            }
        })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}
module.exports= getprivacypolicy;