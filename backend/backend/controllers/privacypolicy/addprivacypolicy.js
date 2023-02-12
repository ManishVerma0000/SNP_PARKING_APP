const db = require("../../db/conn");

const Addprivacypolicy= async (req, res) => {
    try {
        const { id, heading, description } = req.body;
        if (!heading || !description || description === null || heading === null) {
            res.status(400).send({ message: "please enter the valid filed" })
        }
        else {
            db.query('SELECT * FROM table_privacy_policy', (error, data) => {
                if (error) {
                    res.status(502).send({ message: "data not found" })
                } else {
                    console.log(data);
                    if (data.length === 0) {
                        db.query('INSERT INTO table_privacy_policy  SET ?', { id: req.body.id, heading: req.body.heading, description: req.body.description }, (err, data) => {
                            if (err) {
                                console.log({ message: err.message });
                                res.send({message:"unable to add the policy "})
                            } else {
                                console.log(data);
                                
                            }
                        })
                    } else {
                        db.query('UPDATE table_privacy_policy SET id ="' + req.body.id + '", heading = "' + req.body.heading + '", description= "' + req.body.description + '"', (error, data) => {
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
        res.status(500).send({ message: "server error" })
    }
};
module.exports= Addprivacypolicy