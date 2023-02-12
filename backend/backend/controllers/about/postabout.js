const db = require("../../db/conn");
const postabout = async (req, res) => {
    const { id, heading, description } = req.body;
    if ( !heading || !description || description === null || heading === null) {
        res.status(400).send({ message: "please enter the valid details" })
    } else {
        db.query('SELECT * FROM about', (err, data) => {
            if (err) {
                res.status(502).send({ message: "error occured" })
            } else {
                if (data.length === 0) {
                    db.query('INSERT INTO about SET ?', { id: req.body.id, heading: req.body.heading, description: req.body.description }, (err, data) => {
                        if (err) {
                            res.status(502).send({ message: "unable to add the data" })
                        } else {
                            res.status(200).send({ message: "data is inserted" })
                        }
                    })
                } else {
                    db.query('UPDATE  about SET id="' + req.body.id + '" ,heading="' + req.body.heading + '", description= "' + req.body.description + '" ', (err, data) => {
                        if (err) {
                            console.log({ message: err.message })
                            res.status(500).send({ message: "error occured durning updation" })
                        } else {
                            res.status(200).send({ message: "status is updated" })
                        }
                    })
                }
            }
        })
    }
}
module.exports = postabout;
