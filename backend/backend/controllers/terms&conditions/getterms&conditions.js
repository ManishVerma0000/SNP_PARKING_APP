const db = require("../../db/conn");

const getterm_conditions= async (req, res) => {
    try {
        db.query("SELECT * FROM conditions  ", (err, data) => {
            if (err) {
                res.status(502).send({ message: "unable to load data from databse" })
            } else {
                res.status(200).send({ message: data })
            }
        })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }

}
module.exports= getterm_conditions;