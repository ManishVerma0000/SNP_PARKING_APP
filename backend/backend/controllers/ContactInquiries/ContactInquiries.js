const db = require("../../db/conn");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)

    }
})
const filefilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter: filefilter });
const contactandinquries = async (req, res) => {
    const user_id = req.body.user_id;
    const { title, message, status } = req.body;
    const image = req.path.file;
    if (!user_id) {
        res.status(502).send({ message: "please provide the customer id" })
    } else {
        if (!title || !message || !status) {
            res.status(400).send({ message: "please enter the mendatory fields" })
        } else {
            if (req.file == null) {
                db.query('INSERT INTO contact_inquiries SET ?', { customer_id: req.body.user_id, title: req.body.title, image: 0, message: req.body.message, status: req.body.status }, (err, data) => {
                    if (err) {
                        console.log(err)
                        res.send({ message: "not inserted" });
                    } else {
                        console.log(data, "2")
                        res.send({ message: data });
                    }
                })

            } else {
                db.query('INSERT INTO contact_inquiries SET ?', { customer_id: req.body.user_id, title: req.body.title, image: req.file.filename, message: req.body.message, status: req.body.status }, (err, data) => {
                    if (err) {
                        console.log(err)
                        res.send({ message: "not inserted" })
                    } else {
                        console.log(data, "1")
                        res.send({ message: data });
                    }
                })
            }


        }
    }
}
module.exports = contactandinquries;