const db = require("../../db/conn");
const fetch = require("node-fetch");
const updatelocation = async (req, res) => {
    const { id, location } = req.body;
    if (!id || !location || location === null) {
        res.status(502).send({ message: "please enter the valid id and location" })
    } else {
        const address1 = location;
        const address = address1.replaceAll(' ', '+');
        console.log(address);
        if (!address) {
            res.status(400).send({ message: "please enter the valid address" })
        } else {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBr4fC60qcaJzTdfJJLWdIRDjXy9IohH4s`)
                .then((response) => {
                    return response.json();
                }).then(jsonData => {
                    console.log(jsonData);
                    const value = jsonData.results[0].geometry.location;
                    // console.log(value.lat);
                    // console.log(value.lng);
                    db.query('UPDATE location SET location= "' + req.body.location + '", lat="'+value.lat+'",lng ="'+value.lng+'" WHERE id= "' + req.body.id + '"', (error, data) => {
                        if (error) {
                            res.status(502).send({ message: " location is not updated" })
                        } else {
                            res.status(200).send({ message: "location is updated successfully" })
                        }
                    })
                })
                .catch(error => {
                    res.send({ message: error.message })
                })
        }
    }   
}

module.exports = updatelocation;
// const addlocation = async (req, res) => {
//     try {
//         const address1 = req.body.address;
//         const address = address1.replaceAll(' ', '+');
//         console.log(address);
//         if (!address) {
//             res.send({ message: "please enter the correct address" })
//         } else {
//             fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBr4fC60qcaJzTdfJJLWdIRDjXy9IohH4s`)
//                 .then((response) => {
//                     return response.json();
//                 }).then(jsonData => {
//                     console.log(jsonData);
//                     const value = jsonData.results[0].geometry.location;
//                     console.log(value.lat);
//                     console.log(value.lng);
//                     db.query('INSERT INTO location SET ?', { status: req.body.status, location: req.body.address, lat: value.lat, lng: value.lng }, (err, data) => {
//                         if (err) {
//                             console.log(err)
//                             res.send({ message: "unable to load the location" })
//                         } else {
//                             res.send({ message: "data is inserted" })
//                         }
//                     })
//                 })
//                 .catch(error => {
//                     res.send({ message: error.message })
//                 })
//         }
//     } catch (error) {
//         res.send({ message: error.message })
//     }
// }