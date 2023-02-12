
const db = require("../../db/conn");
const changePasswordAdmin = (req,res) => {
    var password = req.body.password
    var id = req.body.id 
    // var salt = bcrypt.genSaltSync(10);
    var newpassword = req.body.newpassword
    
    
     
    db.query('SELECT * FROM admin WHERE password ="' + req.body.password + '" AND id ="'+req.body.id+'"', function(err, resp) {
     if (err){
       //console.log('testing')
       res.status(500).send({message:err})
       return;
     }
     if (resp.length > 0) {
       
       db.query('UPDATE admin SET password = "'+req.body.newpassword+'"  WHERE id ="'+req.body.id+'"',function(errNext,respNext) {
         
         if (errNext){
           //console.log('testing')
           res.status(500).send({message:errNext})
           return;
         }
        
         //console.log('password changed successfully');
         res.status(200).send({data:respNext})
         return;
     });  
     
      }
      else{
       res.status(400).send('Please Enter Correct Password')
      } 
     
   })
   
   
     
   
   
    
   }
   





module.exports = changePasswordAdmin;