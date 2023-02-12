
const db = require("../../db/conn");
const nodemailer = require("nodemailer");
const forgetpassword = async (req, res) => {
    const email = req.body.email;
    if (!email) {
        res.send({ message: "email is not recived" })
    } else {
        db.query('SELECT email FROM users WHERE email= "' + req.body.email + '"', (err, data) => {
            if (err) {
                res.send({ message: "unable to fetch the email from server" })
            } else {
                
                if (!data[0]) {
                    res.send({ message: "user email is invalid" })
                }else{               
                function sendEmail(email, text) {
                    var email = email;
                    var text = text;
                    var mail = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'manishverma88180@gmail.com',
                            pass: 'yqftirfirjqcunzy'
                        }
                    });
                    var mailOptions = {
                        from: 'manishverma88180@gmail.com',
                        to: data[0].email,
                        subject: 'Reset Password',
                        html: '<p>this is the paragrapgh <button><a href="http://127.0.0.1:5500/index.html">click here</a></button></p>'
                        // html: '<p>You requested for reset password, kindly use this <a href="http://localhost:5000/forgetpassword'+ text + '">link</a> to reset your password</p>'
                        // html :"<h1>this is the forget password link you can use this link <a href=" href='http://localhost:5000/forgetpassword'></h1>"> clickhere</a></h1>"

                    };
                    mail.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error)
                        } else {
                            console.log("sent");

                        }
                    });

                }
                var sent = sendEmail(email, text);
                var text = "<h1>this is the heading</h1>"
                if (sent != 0) {
                    res.send({ message: "email is sent successfullly" })
                } else {
                    res.send(" invalid email please enter the valid email")
                }

            }
            }
        })
    }
}
module.exports = forgetpassword;