const db = require("../../db/conn");
const updateAdminProfile =(req,res)=>{

    if(req.body.image === ''){
      var sqls = 'UPDATE admin SET first_name="' + req.body.first_name + '",email="' + req.body.email + '", phone="' + req.body.phone + '", pincode = "'+req.body.pincode+'", gender = "'+req.body.gender+'", address = "'+req.body.address+'" WHERE id = "' + req.body.id + '"'

    }
    else{
       
      var sqls = 'UPDATE admin SET first_name="' + req.body.first_name + '",image="' +req.file.filename+ '",email="' + req.body.email + '", phone="' + req.body.phone + '", pincode = "'+req.body.pincode+'", gender = "'+req.body.gender+'", address = "'+req.body.address+'" WHERE id = "' + req.body.id + '"'
      

    }
    
    
    db.query(sqls,(err,data)=>{
      if (err) {
        // console.log(err)
        res.status(500).send({message: err});
        return;
      }
        res.status(200).send({data:data});
        return;
    });

    
  }
module.exports = updateAdminProfile;