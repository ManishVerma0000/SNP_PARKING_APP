const db = require("../../db/conn");
const updateparking = async (req, res) => {
    var parking_name;
    var capacity;
   var no_of_days;
   var veichle_type_four_wheeler_rent;
   var veichle_type_four_wheeler;
   var veichle_type_two_wheeler;
   var veichle_type_two_wheeler_rent;
    var id = req.body.id;
    if (!id) {
        res.send({ message: "please provide the id of the parking" })
    } else {
        db.query('SELECT * FROM table_add_parking WHERE id= "' + req.body.id + '"', (error, data) => {
            if (error) {
                res.send({ message: "please enter the details" })
            } else {
                // console.log(req.body.parking_name==="");
                if (req.body.parking_name === ""&& req.body.capacity === ""&&req.body.location_id===""&&no_of_days===""&&veichle_type_four_wheeler===""&&veichle_type_four_wheeler_rent===""&&veichle_type_two_wheeler===""&&
                veichle_type_two_wheeler_rent==="") {
                    capacity = data[0].capacity;
                    console.log(capacity);
                    parking_name = data[0].parking_name;
                    location_id= data[0].location_id;
                    no_of_days= data[0].no_of_days;
                    veichle_type_four_wheeler= data[0].veichle_type_four_wheeler;
                    veichle_type_four_wheeler_rent= data[0].veichle_type_four_wheeler_rent;
                    veichle_type_two_wheeler= data[0].veichle_type_two_wheeler;
                    veichle_type_two_wheeler_rent= data[0].veichle_type_two_wheeler_rent;
                    

                    db.query('UPDATE table_add_parking  SET parking_name= "' + data[0].parking_name + '", capacity= "'+data[0].capacity+'",location_id="'+data[0].location_id+'" ,no_of_days= "'+data[0].no_of_days+'" ,veichle_type_four_wheeler= "'+data[0].veichle_type_four_wheeler+'" ,veichle_type_four_wheeler_rent= "'+data[0].veichle_type_four_wheeler_rent +'",  veichle_type_two_wheeler= "'+data[0].veichle_type_two_wheeler +'", veichle_type_two_wheeler_rent= "'+data[0].veichle_type_two_wheeler_rent +'" WHERE id= "' + req.body.id + '"', (error, data1) => {
                        if (error) {
                            res.send({ message: "error occurs" })
                        } else {
                            console.log(data1)
                            res.send({ message: "value is not changed same as older" })
                        }
                    })
                    

                } else {                    
                    db.query('UPDATE table_add_parking  SET parking_name= "' + req.body.parking_name + '" ,capacity= "'+req.body.capacity+'",location_id="'+req.body.location_id+'" ,no_of_days= "'+req.body.no_of_days+'" ,veichle_type_four_wheeler= "'+req.body.veichle_type_four_wheeler+'" ,veichle_type_four_wheeler_rent= "'+req.body.veichle_type_four_wheeler_rent +'" ,  veichle_type_two_wheeler= "'+req.body.veichle_type_two_wheeler +'", veichle_type_two_wheeler_rent= "'+req.body.veichle_type_two_wheeler_rent +'" WHERE id= "' + req.body.id + '"', (error, data) => {
                        if (error) {
                            res.send({ message: "error occurs" })
                        } else {
                            console.log(data)
                            res.send({ message: data })
                        }
                    })
                }
            }
        });

    }
}

module.exports = updateparking;

