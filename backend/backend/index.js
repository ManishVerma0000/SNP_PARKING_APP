const express= require("express");
const port= 5000;
const router= require("./routes/route")
const app= express();
const bodyParser= require("body-parser")
app.use(express.json());
const dotenv= require("dotenv");
dotenv.config({path:'./.env'});
const { urlencoded } = require("express");
const cookieParser = require("cookie-parser");
app.use(router);
app.use(urlencoded({extended:true}));
app.use( bodyParser.json() );      
app.use(cookieParser())
const cors = require('cors');

app.use(cors());

app.listen(port,()=>{
    console.log(`server is listening to the port on ${port}`)
});