const e = require("express");
const db = require("../../../db/conn");

const getdetailsofoneusebookings = async (req, res) => {
    const user_id = req.body.user_id;
    if (!user_id) {
        res.status(400).send({ message: "please enter the details of user" });
    } else {

        db.query("SELECT * FROM book_parking WHERE user_id= '" + req.body.user_id + "'", (error, data) => {
            if (error) {
                res.status(502).send({ message: "error occurs" })
            } else {
                if (data[0] == null) {
                    res.status(502).send({ message: "no data is found" })
                } else {
                    res.status(200).send({ message: data })
                }

            }
        })
    }
}
module.exports = getdetailsofoneusebookings;