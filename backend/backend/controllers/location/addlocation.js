const db = require("../../db/conn");
const fetch = require("node-fetch");
 const addlocation= async (req, res) => {
    try {
        const address1 = req.body.address;
        const address = address1.replaceAll(' ', '+');
        console.log(address);
        if (!address) {
            res.send({ message: "please enter the correct address" })
        } else {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBr4fC60qcaJzTdfJJLWdIRDjXy9IohH4s`)
                .then((response) => {
                    return response.json();
                }).then(jsonData => {
                    console.log(jsonData);
                    const value = jsonData.results[0].geometry.location;
                    console.log(value.lat);
                    console.log(value.lng);
                    db.query('INSERT INTO location SET ?', { location: req.body.address, lat: value.lat, lng: value.lng }, (err, data) => {
                        if (err) {
                            console.log(err)
                            res.send({ message: "unable to load the location" })
                        } else {
                            res.send({ message: "data is inserted" })
                        }
                    })
                })
                .catch(error => {
                    res.send({ message: error.message })
                })
        }
    } catch (error) {
        res.send({ message: error.message })
    }
}

module.exports= addlocation;
