const db = require('../../db/conn')

const userRegistration = (req,res)=>{
    if(req.body.first_name == '' && req.body.first_name == null){
        return res.status(400).send({
            success: false,
            message: 'please provide first_name'

        })
    }
    if(req.body.last_name == '' && req.body.last_name == null){
        return res.status(400).send({
            success: false,
            message: 'please provide last_name'

        })
    }
    if(!req.body.email == '' && req.body.email == null){
        return res.status(400).send({
            success: false,
            message: 'please provide email'

        })
    }
    if(!req.body.phone  == '' && req.body.phone == null){
        return res.status(400).send({
            success: false,
            message: 'please provide email'

        })
    }
    if(!req.body.address == '' && req.body.address == null){
        return res.status(400).send({
            success: false,
            message: 'please provide address'

        })
    }
    if(!req.body.plate_number == '' && req.body.plate_number == null){
        return res.status(400).send({
            success: false,
            message: 'please provide plate_number'

        })
    }

    db.query('SELECT email FROM users WHERE email = "'+req.body.email+'"',(err,data)=>{
        if(err){
            res.status(500).send({message:err})
        }
        if(data.length > 0){
            res.status(400).send({message:'Email already exist'})
        }
        else{

            db.query(`INSERT INTO users  (first_name,last_name,phone, email, address, plate_number)
    VALUES ('${req.body.first_name}','${req.body.last_name}', '${req.body.phone}', '${req.body.email}', '${req.body.address}', '${req.body.plate_number}');`,(err,data)=>{
      if (err) {
        res.status(500).send({message:err});
        return;
      }
        res.status(200).send({data:data});
        return;
    });

        }
    })

    
       
}


module.exports = userRegistration;