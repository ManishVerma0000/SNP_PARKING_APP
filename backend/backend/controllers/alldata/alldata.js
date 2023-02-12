const db = require("../../db/conn");

const alldata = async (req, res) => {
    try {
        const userid = req.body.id;
        if (!userid) {
            res.statu(400).send({ message: "please enter the details of the user want to show" })
        }
        db.query('SELECT first_name,last_name,email,phone from users WHERE id= "' + req.body.id + '"', (error, data) => {
            if (error) {
                console.log(error);
                res.status(400).send({ message: "unable to fetch the data from the server" })
            } else {
                if (data[0] == null) {
                    res.status(502).send({ message: "no data found" })
                } else {
                    console.log(data[0]);
                    res.status(200).send({ message: data[0] })
                }
            }
        })
    } catch (error) {
        res.status(400).send({ message: "error occures" })
    }
}
module.exports = alldata;