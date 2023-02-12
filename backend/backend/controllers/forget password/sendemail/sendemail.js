const nodemailer = require("nodemailer");

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
        to: "mkverma5979@gmail.com",
        subject: 'Reset Password',
        html:'<p>this is the paragrapgh <button><a href="http://127.0.0.1:5500/index.html">click here</a></button></p>'
        // html: '<p>You requested for reset password, kindly use this <a href="http://localhost:5000/forgetpassword'+ text + '">link</a> to reset your password</p>'
        // html :"<h1>this is the forget password link you can use this link <a href=" href='http://localhost:5000/forgetpassword'></h1>"> clickhere</a></h1>"

    };
    mail.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log("sent")
        }
    });
}
module.exports= sendEmail;