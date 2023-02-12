const db = require("../../../db/conn");

const bookparking = async (req, res) => {

    const { location_id, start_time, end_time, parking_id, user_id, booking_date, parking_amount, veichle_type } = req.body;
    if (!location_id || !start_time || !end_time || !parking_amount || !parking_id || !user_id || !booking_date || !veichle_type) {
        res.status(400).send({ message: "please enter the mandatory fileds" })
    } else {
        db.query('INSERT into book_parking SET ? ', { location_id: req.body.location_id, start_time: req.body.start_time, end_time: req.body.end_time, parking_id: req.body.parking_id, parking_amount: req.body.parking_amount, veichle_type: req.body.veichle_type,user_id:req.body.user_id,booking_date:req.body.booking_date },(err,data)=>{
            if(err){
                res.status(502).send({message:"unable to add the data to the server"})
            }else{ console.log(data);
                res.status(201).send({message:"inserted"});
               
            }
        })
    }


}
module.exports = bookparking;