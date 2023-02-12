const db= require("../../../db/conn");

const allbooking= async(req,res)=>{
    try {
         db.query('SELECT a.*, b.first_name, b.last_name, c.parking_name,d.location FROM book_parking a INNER JOIN users b ON a.user_id = b.user_id INNER JOIN table_add_parking c ON c.id = a.id INNER JOIN location d ON a.location_id = d.id',(err,data)=>{
            if(err){
                res.status(502).send({message:"error occurs"})
            }else{
                res.status(201).send({message:data})
            }
         })
    } catch (error) {
        res.status(400).send({message:"error occures"})
        
    }
}
module.exports= allbooking;
