const db = require("../../db/conn");
const getabout=  async (req, res) => {
    try {
        db.query("SELECT * FROM about", (err, data) => {
            if (err) {
                res.status(502).send({ message: "cannot get the details" })
            } else {
                res.status(200).send({ message: data })
            }
        })

    } catch (error) {
        res.status(400).send("errror occurred please wait for a while")
    }
}
module.exports= getabout;