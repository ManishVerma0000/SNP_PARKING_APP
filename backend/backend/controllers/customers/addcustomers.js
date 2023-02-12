const db= require("../../db/conn");

const addcustomers= async(req,res)=>{
    const id= req.body.id;
    if(!id){
        res.send({message:"please enter the customer id"})
    }else{
        db.query('INSERT INTO location SET?', {  location: req.body.location, status: req.body.status }, (error, data) => {
            if (error) {
                res.send({ message: error.message })
            } else {
                res.send({ message: "parking added successfullly" })
            }
        })
        
        
    }
}

module.exports= addcustomers;
