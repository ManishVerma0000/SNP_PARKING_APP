const db = require("../../db/conn");

const updateParkingDetails = (req,res)=>{
    const images = []
    db.query('UPDATE table_add_parking SET parking_name = "'+req.body.parking_name+'", capacity="'+req.body.capacity+'", no_of_days="'+req.body.no_of_days+'", veichle_type_two_wheeler="'+req.body.veichle_type_two_wheeler+'", veichle_type_four_wheeler = "'+req.body.veichle_type_four_wheeler+'", two_wheeler_per_hour_charge = "'+req.body.two_wheeler_per_hour_charge+'", two_wheeler_per_day_charge = "'+req.body.two_wheeler_per_day_charge+'", two_wheeler_per_week_charge =  "'+req.body.two_wheeler_per_week_charge+'", two_wheeler_per_month_charge= "'+req.body.two_wheeler_per_month_charge+'", four_wheeler_per_hour_charge = "'+req.body.four_wheeler_per_hour_charge+'", four_wheeler_per_day_charge = "'+req.body.four_wheeler_per_day_charge+'", four_wheeler_per_week_charge = "'+req.body.four_wheeler_per_week_charge+'", four_wheeler_per_month_charge = "'+req.body.four_wheeler_per_month_charge+'", location_id = "'+req.body.location_id+'" WHERE id = "'+req.body.id+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
        }
        else{
            
            if (req.files) {
                req.files.forEach((file) => {
                    images.push(file.filename)
                })
                images.forEach((adressvalue) => {
                    
                    db.query('INSERT INTO add_parking_images SET ?', { parking_images: adressvalue, parking_id: req.body.id })
                })
                // try {
                //     console.log("success")
                // } catch (error) {
                //     console.log(error)
                // }
            }
            
            res.status(200).send({
                success: true,
                message: "Parking Details Updated Successfully",
                data:data
            })
        }
    })


}

module.exports = updateParkingDetails;