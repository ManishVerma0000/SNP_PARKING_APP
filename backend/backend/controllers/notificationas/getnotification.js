const db = require("../../db/conn");
const customerName = require("../notificationas/getCustomerName");



const getNotificationas= async(req,res)=>{
//     db.query("SELECT b.*, a.first_name, a.last_name FROM users a LEFT JOIN notificationas b ON a.id = b.user_id OR b.user_id = 0 ",(err,data)=>{
//         if(err){
//             res.status(500).send({message:err})
//         }else{
//             res.status(200).send({message:data})
//         }
//     })
// }
const notificationData = []


db.query("SELECT * FROM notificationas WHERE isDelete = 0",(err,data)=>{
    if(err){
        console.log("err")
        res.status(500).send({
            success: false,
            message: err
        })
    }

    else{
        data.forEach(e => {
            var arr = {}
            arr["id"] = e.id;
            arr["user_id"] = e.user_id;
            arr["description"] = e.description;
            arr["title"] = e.title;
            arr["date"] = e.date;
            if(e.user_id === 0){
                arr["customerName"] ="All"
            }else{
                arr["customerName"] = customerName.GetCustomerName(e.user_id) 
            }
            // (arr["customerName"] = {
            //     "customer":customerName.GetCustomerName(e.user_id)
            //    })
            
            notificationData.push(arr)
        });

        // res.status(200).send({
        //     success: true,
        //     message:'Data Collected Successfully',
        //     data: notificationData,
        // })

        setTimeout(()=>{
            res.status(200).send({
            success: true,
            message:'Data Collected Successfully',
            data: notificationData,
        })
        },1000)
    }
})

}



module.exports= getNotificationas;