const db = require("../../db/conn");
const postdispute=  async (req, res) => {
    try {
        const { customer_id, name, email, phone, description } = req.body;
        if (!customer_id || !name || !email || !phone || !description || customer_id === null || name === null || email === null || phone === null || description === null) {
            res.send({ message: "please enter all the details to solve the dispute" });
        } else {
            db.query('INSERT INTO table_contact_inquiries SET ?', { customer_id: req.body.customer_id, name: req.body.name, email: req.body.email, phone: req.body.phone, description: req.body.description }, (error, data) => {
                if (error) {
                    res.send({ message: "unable to insert the value" })
                } else {
                    res.send({ message: "sent successfullly" });
                }
            })
        }
    } catch (error) {
        res.send({ message: "unable to solve the dispute" })
    }

}
module.exports= postdispute;
