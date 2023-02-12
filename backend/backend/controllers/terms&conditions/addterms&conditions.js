const db = require("../../db/conn");
const addterms_conditions= async (req, res) => {
    try {
        const { id, heading, description } = req.body;
        if (!heading || !description || description === null || heading === null) {
            res.status(400).send({ message: "please enter the valid filed" })
        } else {
            db.query("SELECT * FROM conditions", (error, data) => {
                if (error) {
                    console.log(error)
                    res.status(500).send({ message: "error occurred" })
                } else {
                    if (data.length === 0) {
                        db.query('INSERT INTO conditions  SET ? ', { id: req.body.id, heading: req.body.heading, description: req.body.description }, (error, data) => {
                            if (error) {
                                res.status(502).send({ message: "no data is inserted" })
                            } else {
                                res.status(200).send({ message: "data is inserted" })
                            }
                        })
                    } else {
                        db.query('UPDATE conditions SET  heading = "' + req.body.heading + '", description= "' + req.body.description + '"', (error, data) => {
                            if (error) {
                                res.status(502).send({ message: "error occured" })
                            } else {
                                console.log(data)
                                res.status(200).send({ message: "value is updated" })
                            }
                        })
                    }
                }
            })
        }
    } catch (error) {
        res.status(404).send({ message: "unable to load the data at this time" })
    }
}
module.exports= addterms_conditions;
