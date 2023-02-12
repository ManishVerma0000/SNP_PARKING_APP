const db = require("../../db/conn");
const bcrypt= require("bcryptjs")
const resetpassword=  async (req, res) => {
    try {
        const { email, newpassword, confirmnewpassword } = req.body;
        if (!email || !newpassword || !confirmnewpassword || email === null || newpassword === null || confirmnewpassword === null) {
            res.status(401).send({ message: "please enter all the details" })
        } else {
            if (newpassword !== confirmnewpassword) {
                res.status(401).send({ message: "password not match please check password and confirm password" })
            } else {
                db.query("SELECT * FROM users where email='" + req.body.email + "'", (error, data) => {
                    if (error) {
                        console.log(error)
                        res.status(500).send({ message: "no data found" })
                    } else {if(data[0]==null){
                        res.status(502).send({message:"no data found"})
                    }else{
                        const password = bcrypt.hashSync(newpassword, 10);
                        db.query('UPDATE users  SET password="' + password + '" WHERE email= "' + req.body.email + '"', (err, data) => {
                            if (err) {
                                res.send({ message: "your password is not reset please try again" })
                            } else {
                                res.status(200).send({ message: "password update" })
                            }
                        })
                    }
                        
                    }
                })
            }
        }
    } catch (error) {
        res.send.status(400)({ message: "error occured" })
    }
}
module.exports= resetpassword;