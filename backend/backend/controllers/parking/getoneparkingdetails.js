const db = require("../../db/conn");
const getoneparkingdetails= async (req, res) => {
    // const id = req.body.id;
    // if (!id) {
    //     res.send({ message: "please enter the details of parking" })
    // } else {
        db.query("SELECT a.*, b.parking_images FROM  table_add_parking a LEFT JOIN add_parking_images b ON a.id = b.parking_id WHERE a.id=  '" + req.body.id + "'", (error, data) => {
            if (error) {
                res.status(500).send({
                    message: error
                })
            } 
            else{
                res.status(200).send({data: data })
            }
                
            }
        )
    //}
}
module.exports= getoneparkingdetails;
