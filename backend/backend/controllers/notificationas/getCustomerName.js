const db = require("../../db/conn");


exports.GetCustomerName = (Id)=>{
    
    var customerName= []
  
    db.query('SELECT first_name, last_name FROM users WHERE id = "'+Id+'"',(err,res)=>{
            if(err){
                console.log("err")
            }
            else{
                
                customerName.push(res[0])
               
            }
            
           
            
           
            
    });
    
    return customerName;
   
    
}