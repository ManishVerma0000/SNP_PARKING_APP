
const bcrypt = require("bcryptjs")
const db = require("../../db/conn");
const changepassword = async (req, res) => {
    const id = req.body.id;
    const oldpassword = req.body.oldpassword;
    const newpassword = req.body.newpassword;
    const confirmnewpassword = req.body.confirmnewpassword;

    if (!id) {
        res.status(400).send({ message: "user id is not found" })
    } else {
        db.query('  SELECT * FROM users WHERE id= "' + req.body.id + '"', async (error, data) => {
            if (error) {
                res.status(502).send({ message: "server error" })
            } else {
                if (data[0] == null) {
                    res.send({ message: "unable to fuind the data from the database" })
                } else {
                    const dbpassword = data[0].password;
                    const comparepassword = await bcrypt.compare(oldpassword, dbpassword);
                    console.log(comparepassword);
                    if (comparepassword != true) {
                        res.status(401).send({ message: "please enter the validpassword" })
                    } else {
                        if (!newpassword || !confirmnewpassword) {
                            res.status(400).send({ message: "please enter the password you want to change" })
                        } else {
                            if (newpassword === confirmnewpassword) {
                                const hashnewpassword = await bcrypt.hash(newpassword, 10);
                                console.log(hashnewpassword)
                                db.query('UPDATE users SET  password= "' + hashnewpassword + '"  WHERE id="' + req.body.id + '"', (error, data) => {
                                    if (error) {
                                        res.status(502).send({ message: "server error2" })
                                    } else {
                                        res.status(200).send({ message: "password is updated" })
                                    }
                                })
                            } else {
                                res.status(401).send({ message: "pasword mismatatch" })
                            }
                        }


                    }
                }

            }
        })
    }
}



module.exports = changepassword;