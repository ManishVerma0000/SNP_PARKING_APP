const bcrypt = require("bcryptjs");
const db = require("../../db/conn");
const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send({ message: "please enter the valid email and password" })
        } else {
            db.query('SELECT * FROM users WHERE email=  "' + req.body.email + '"', async (err, data) => {
                if (err) {
                    console.log(err)
                    res.status(502).send({ message: "please enter the valid email" })
                } else {
                    console.log(data.length)
                    if (data.length > 0) {
                        const comparepassword = await bcrypt.compare(password, data[0].password);
                        if (comparepassword) {
                            res.status(200).send("login is successful")
                        } else {
                            res.status(400).send({ message: "please enter the valid password" });
                        }
                    } else {
                        res.status(400).send("please register your email!")
                    }
                }
            })
        }
    } catch (error) {
        res.send(400).send({ message: "please register the email" })
    }
}
module.exports = loginuser;
