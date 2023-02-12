const { response } = require("express");
const db = require("../../db/conn");
const addparking= async (req, res) => {
    var images = []
    if(req.body.parking_name == '' || req.body.parking_name == null){
         res.status(400).send({
            success: false,
            message: 'Please Enter parking Name'
        })
        return;
    }
    if(req.body.capacity == '' || req.body.capacity == null){
         res.status(400).send({
            success: false,
            message: 'Please Enter Capacity'
        })
        return;
    }
    if(req.body.no_of_days == '' || req.body.no_of_days == null){
         res.status(400).send({
            success: false,
            message: 'Please Enter No Of Days'
        })
        return;
    }

    if(req.body.location_id == '' || req.body.location_id == null){
        res.status(400).send({
            success: false,
            message: 'Please Enter Location'
        })
        return;
    }
   
    db.query(`INSERT INTO table_add_parking (parking_name,location_id,capacity,no_of_days,veichle_type_two_wheeler,veichle_type_four_wheeler,two_wheeler_per_hour_charge,two_wheeler_per_day_charge,two_wheeler_per_week_charge,two_wheeler_per_month_charge,four_wheeler_per_hour_charge,four_wheeler_per_day_Charge,four_wheeler_per_week_charge,four_wheeler_per_month_charge)
    VALUES('${req.body.parking_name}','${req.body.location_id}','${req.body.capacity}', '${req.body.no_of_days}', '${req.body.veichle_type_two_wheeler}', '${req.body.veichle_type_four_wheeler}','${req.body.two_wheeler_per_hour_charge}', '${req.body.two_wheeler_per_day_charge}','${req.body.two_wheeler_per_week_charge}','${req.body.two_wheeler_per_month_charge}', '${req.body.four_wheeler_per_hour_charge}', '${req.body.four_wheeler_per_day_charge}', '${req.body.four_wheeler_per_week_charge}', '${req.body.four_wheeler_per_month_charge}');`,(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                message: err
            })
            return;
        }
        else{
            const lastInsertedID = data.insertId;

            if (req.files) {
                req.files.forEach((file) => {
                    images.push(file.filename)
                })
                images.forEach((adressvalue) => {
                    
                    db.query('INSERT INTO add_parking_images SET ?', { parking_images: adressvalue, parking_id: lastInsertedID })
                })
                // try {
                //     console.log("success")
                // } catch (error) {
                //     console.log(error)
                // }
            }


            res.status(200).send({
                success: true,
                message: 'Parking Added Successfully',
                data: data
            })
            return;
        }
    })
}
module.exports= addparking;


//p-  stripepayment@12df



