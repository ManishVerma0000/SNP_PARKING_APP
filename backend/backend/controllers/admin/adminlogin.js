const db = require("../../db/conn");
const adminlogin = async (req, res) => {
    const id = req.body.id;
    if (!id) {
        res.status(401).send({ message: "please enetr the adminid " })
    } else {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).send("please enter the all details")
        } else {
            db.query('SELECT email,password from admin WHERE id = "'+req.body.id+'"', (error, data) => {
                if (error) {
                    console.log(error);
                    res.status(502).send({ message: "unable to fetch the data from the server" })
                } else {
                    if (data[0] == null) {
                        res.send({ message: "no data found" })
                    } else {
                        const dbemail = data[0].email;
                        const dbpassword = data[0].password;
                        if (dbemail !== email && dbpassword !== password) {
                            res.status(400).send({ message: "password not match" })
                        } else {
                            res.status(200).send({ success:true,
                                 message: "login is successful" })
                        }
                    }
                }
            })
        }
    }
}
module.exports = adminlogin;