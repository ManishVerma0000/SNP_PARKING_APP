const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db = require('../db/conn')
router.use(express.json());
router.use("/uploads", express.static('uploads'));
const multer = require("multer");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));


const cors = require('cors');
router.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)

    }
})
const filefilter = (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter: filefilter });

const userRegistration = require("../controllers/registration/UserRegistration");
const locationlist= require("../controllers/locationlist/locationlist");
const getdetailsofadmin= require("../controllers/getprofileodadmin/getprofileadmin")
const getContact= require("../controllers/contact/getcontact");
const adminlogin= require("../controllers/admin/adminlogin");
const getallcustomers= require("../controllers/admin/getallcustomers");
const addlocation= require("../controllers/location/addlocation")
const alllocationlist= require("../controllers/location/alllocationlist")
const updatelocation= require("../controllers/location/updatelocation")
const locationstatus= require("../controllers/location/locationstatus");
const Addprivacypolicy= require("../controllers/privacypolicy/addprivacypolicy");
const getprivacypolicy= require("../controllers/privacypolicy/getprivacypolicy");
const addterms_conditions= require("../controllers/terms&conditions/addterms&conditions");
const getterm_conditions= require("../controllers/terms&conditions/getterms&conditions");
const postabout= require("../controllers/about/postabout")
const getabout= require("../controllers/about/getabout");
const alldispute= require("../controllers/Contact Inquiries/alldispute");
const adddlocation= require("../controllers/location/addlocation");
const changepassword= require("../controllers/changepassword/changepassword");
const loginuser= require("../controllers/login/login")
const alldata= require("../controllers/alldata/alldata")
const updateAdminProfile = require("../controllers/admin/UpdateAdmin");
const getLocationById = require('../controllers/location/getLocationById');
const updateprofile= require("../controllers/updateprofile/updateprofile");
const managecustomer= require("../controllers/managecustomers/getmanagecustomers");
const forgetpassword= require("../controllers/forget password/forgetpassword");
const resetpassword= require("../controllers/forget password/resetpassword");
const contact= require("../controllers/contact/contact");
const postdispute= require("../controllers/Contact Inquiries/postdispute");
const addparking= require("../controllers/parking/addparking");
const getparking= require("../controllers/parking/getparking");
const updateparking= require("../controllers/parking/updateparking");
const getoneparkingdetails= require("../controllers/parking/getoneparkingdetails");
const deleteparking= require("../controllers/parking/deleteparking");
const adddnotifications= require("../controllers/notificationas/addnotifications");
const sendnotificationas= require("../controllers/notificationas/sendnotificationas");
const changepasswordadmin= require("../controllers/changepasswordadmin/changepasswordadmin");
const getprofileofadmin= require("../controllers/getprofileodadmin/getprofileadmin");
const book_parking= require("../controllers/booking/bookparking/bookparking");
const allbooking= require("../controllers/booking/getallbooking/getallbooking");
const dataofonebooking= require("../controllers/booking/getdataofonebooking/getdataofonebooking");
const getdetailsofoneuserbookings= require('../controllers/booking/getdataofonebooking/getdataofonebooking');
const contactandinquries= require("../controllers/ContactInquiries/ContactInquiries");
const updatestatus= require("../controllers/updatestatus/updatestatus");
const getNotificationas= require("../controllers/notificationas/getnotification");
const getCustomerDetailsById = require('../controllers/customers/customerDetailsById')
const locationDeleteStatus = require("../controllers/location/locationDelete");
const customerDelete = require("../controllers/customers/customerDelete");
const parkingStatus = require("../controllers/parking/parkingStatus");
const notificationDetailsByID = require("../controllers/notificationas/notificationDetailsById");
const deleteNotification = require("../controllers/notificationas/notificationDelete");
const updateParkingDetails = require("../controllers/parking/updateParkingDetails");



//Api For Mobile
const favoriteParking = require("../snp_mobile_api/controller/favariteLocation");
const getFavoriteParking = require("../snp_mobile_api/controller/getFavoriteParking");
const customerPayment = require("../snp_mobile_api/controller/payment");



//route
router.post("/userRegistration",upload.none(['first_name','last_name','email','phone','plate_number','address']),userRegistration)
router.post("/CustomerDetailsById",getCustomerDetailsById)
router.post("/login", loginuser)
router.post("/changepassword", changepassword);
router.post("/allData", alldata);
router.get("/locationlist",locationlist);
router.post("/getLocationByID",getLocationById);
router.post("/updateAdmin",upload.single('image'),updateAdminProfile)
router.post("/getmanagecustomer",managecustomer)
router.post("/updateprofile", upload.single("saveimage"),updateprofile);
router.post("/contact",contact);
router.get("/getProfileOfAdmin", getdetailsofadmin);
router.post("/dispute",postdispute);
router.post("/adminLogin", adminlogin);
router.get("/getAllCustomers", getallcustomers);
router.post("/addLocation", addlocation);
router.get('/allLocationList',alllocationlist );
router.post("/updateLocation",updatelocation);
router.post("/updateLocationStatus", locationstatus);
router.post("/addPrivacyPolicy", Addprivacypolicy);
router.get('/getPrivacyPolicy',getprivacypolicy );
router.post("/addTerms&Conditions", addterms_conditions);
router.get("/getTerms&Conditions", getterm_conditions);
router.post("/postAbout",postabout);
router.get("/getAbout",getabout );
router.get("/allDispute", alldispute);
router.post("/forgetPassword", forgetpassword);
router.post("/resetPassword", resetpassword);
router.post("/addLocation",adddlocation);
router.post("/addParking",upload.array("parking_images",20),addparking);
router.get("/getParking",getparking);
router.post("/updateParking", updateparking);
router.post("/getoneParking", getoneparkingdetails);
router.post("/deleteParking", deleteparking);
router.post("/addNotifications", adddnotifications);
router.post("/getNotificationas",sendnotificationas)
router.post("/changePasswordAdmin", changepasswordadmin)
router.get("/getProfileOfAdmin",getprofileofadmin);
router.get("/dataOfOneBooking",dataofonebooking);
router.get("/getAllBooking",allbooking);
router.post("/bookParking",book_parking);
router.post("/getDetailsOfOneUserBookings",getdetailsofoneuserbookings);
router.post("/updateStatus",updatestatus);
router.post("/contactandinquries",upload.single("saveimage"), contactandinquries);
router.get("/getNotifications",getNotificationas);
router.get("/getContact",getContact);
router.post("/locationDelete",locationDeleteStatus);
router.post("/customerDelete", customerDelete);
router.post("/parkingStatus",parkingStatus);
router.post("/notificationDetails",notificationDetailsByID);
router.post("/notificationDelete",deleteNotification);
router.post("/updateParkingDetails",upload.array("parking_images",20), updateParkingDetails);



//Api For Mobile
router.post("/favoriteParking",favoriteParking);
router.get("/getFavoriteParking",getFavoriteParking);
router.post("/customerPayment",customerPayment);
router.post("/addNewCard",customerPayment.addNewCard);
router.post("/customerCreate",customerPayment.createNewCustomer);
router.post("/pay",customerPayment.createCharges)



//login api

router.post("/loginAdminn", (req, res) => {
 
  
    if (!req.body.email && req.body.email == null) {
      return res.status(400).send({
        success: "false",
        msg: "email  is empty!",
      });
    }
    if (!req.body.password && req.body.password == null) {
      return res.status(400).send({
        success: "false",
        msg: "password is empty!",
      });
    }
    // var encryptPassowrd = md5Hash.MD5(req.body.password);
    //`SELECT * FROM tbl_users WHERE email = ${sql.escape(req.body.login)} AND password=${(encryptPassowrd)}`
    db.query(
      'SELECT * FROM admin WHERE password="'+ req.body.password+'" AND email ="'+req.body.email+'"',
      (err, result) => {
       // console.log(result);
        // user does not exists
        if (err) {
          throw err; 
          return res.status(400).send({
            msg: err,
          });
        }
        if (!result.length) {
          return res.status(401).send({
            success: "false",
            msg: "Email or password is incorrect!",
          });
        } 
        else{
          return res.status(200).send({
                    success:'true',
                    msg: 'Login Successfully!',
                    user: result[0]
                  });
        }
  
        
  
      }
    );
  });



//login api

module.exports = router;

