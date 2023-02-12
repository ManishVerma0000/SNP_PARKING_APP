const db = require("../../db/conn");
const sendnotificationas = async (req, res) => {
    const user_id = req.body.user_id;
    const key = req.body.key;
    db.query("SELECT* FROM notificationas", (err, data) => {
        if (err) {
            res.send({ message: "error is occured" })
        } else {
            if (key != 0) {
                db.query('UPDATE notificationas SET  user_id="' + data[0].user_id + '"', (err, data) => {
                    if (err) {
                        res.status(502).send({ message: "error occurs2" });
                        console.log(err)
                    } else { 
                        res.status(200).send({ message: "updated2" })
                       
                    }
                })
            } else {
                db.query('UPDATE notificationas SET  user_id= 0 ', (err, data) => {
                    if (err) {
                        res.status(502).send({ message: "error occurs1" });
                        console.log(err)
                    } else {
                        console.log(data)
                        
                        res.status(200).send({ message: "updated" });

                    
                        
                    }
                })
            }
        }
    })
}
module.exports = sendnotificationas;
