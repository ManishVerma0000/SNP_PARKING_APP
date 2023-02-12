const db = require("../../db/conn");

const contact= async (req, res) => {
    const { phone, email, address } = req.body;
    db.query('SELECT * FROM contact', (err, data) => {
        if (err) {
            res.send({ message: " error in the datbase" })
        } else {
            console.log(data)
            console.log(data.length)
            console.log(data.length >= 0)
            if (data.length == 0) {
                db.query('INSERT INTO contact SET ?', { phone: req.body.phone, email: req.body.email, address: req.body.address }, (error, data) => {
                    if (error) {
                        res.send({ message: error.message })
                    } else {
                        res.send({ message: "value is inserted" })
                    }
                })

            } else {
                db.query('UPDATE contact SET phone ="' + req.body.phone + '", email = "' + req.body.email + '", address= "' + req.body.address + '"', (error, data) => {
                    if (error) {
                        res.send({ message: "error occured" })
                    } else {
                        res.send({ message: "value is updated" })
                    }
                })
            }
        }
    })
}
module.exports= contact;