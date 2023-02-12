const db = require('../../db/conn');
const customerName = require("../notificationas/getCustomerName");

const notificationDetailsById = (req,res)=>{
    db.query('SELECT a.*, b.first_name, b.last_name, b.id FROM notificationas a LEFT JOIN users b ON a.user_id = b.id OR a.user_id = 0   WHERE a.id = "'+req.body.id+'"',(err,data)=>{
        if(err){
            res.status(500).send({
                success: 'false',
                message: err
            })
        }

        else{
            res.status(200).send({
                success: 'true',
                data:data
            })
        }
    })

//     const notificationData = []


// db.query('SELECT * FROM notificationas WHERE id = "'+req.body.id+'" ',(err,data)=>{
//     if(err){
//         console.log("err")
//         res.status(500).send({
//             success: false,
//             message: err
//         })
//     }

//     else{
//         data.forEach(e => {
//             var arr = {}
//             arr["id"] = e.id;
//             arr["user_id"] = e.user_id;
//             arr["description"] = e.description;
//             arr["title"] = e.title;
//             arr["date"] = e.date;
//             // if(e.user_id === 0){
//             //     arr["customerName"] = ['All']
//             // }else{
//                 arr["customerName"] = customerName.GetCustomerName(e.user_id) 
//             //}
//             // (arr["customerName"] = {
//             //     "customer":customerName.GetCustomerName(e.user_id)
//             //    })
            
//             notificationData.push(arr)
//         });

//         // res.status(200).send({
//         //     success: true,
//         //     message:'Data Collected Successfully',
//         //     data: notificationData,
//         // })

//         setTimeout(()=>{
//             res.status(200).send({
//             success: true,
//             message:'Data Collected Successfully',
//             data: notificationData,
//         })
//         },1000)
//     }
// })

// }

}


module.exports = notificationDetailsById;