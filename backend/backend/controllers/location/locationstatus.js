const db = require("../../db/conn");
const locationstatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        if (!id) {
            res.status(400).send({ message: "plese enter the id" })
        } else {
            db.query('UPDATE location SET status= "' + req.body.status + '" WHERE id= "' + req.body.id + '"', (error, data) => {
                if (error) {
                    res.status(500).send({ message: error })
                } else {     
                res.status(200).send({ message: "status is changed" })               
                }
            })
        }
    } catch (error) {
        res.status(502).send({ message: "error occured" })

    }
}
module.exports = locationstatus;
