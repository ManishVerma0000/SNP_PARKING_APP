const db = require("../../db/conn");
const updateprofile = async (req, result) => {
    try {
        db.query('UPDATE users SET first_name="' + req.body.first_name + '",image="' + req.file.path + '",email="' + req.body.email + '", phone="' + req.body.phone + '" WHERE id = "' + req.body.id + '"', (err, res) => {
            if (err) {
                console.log(err);
                result.status(502).send({ message: "unable to update the details" })
            }
            else {
                console.log(res)
                result.send({ message: " profile is updated" })
            }
        })
    } catch (error) {
        result.status(400).send({ message: "error occurs" })
    }

}
module.exports = updateprofile;