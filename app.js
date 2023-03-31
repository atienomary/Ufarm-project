const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require('path');
const { title } = require("process");
const router = express.Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// support parsing of application/json type postdata
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// creating an environment file
// require("dotenv").config();
const config = require("./config/database")
 
const employeeRoutes = require("./routes/employeeRoutes")
const about = require("./routes/about")
const contact = require("./routes/contact")
const registerRoutes = require("./routes/registerRoutes")

// creating a connect btn the control and database
mongoose.connect(config.database,{
    //helps collect and format data then converts it to backend 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDb")
}).catch((err) => {
    console.err("Error connecting to MongoDB", err)
});
const db = mongoose.connection
// checking if db has connected
db.once("open", ()=>{
    console.log("connected to db")
})
db.on("error",(err)=>{
    console.error(err)
})

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));




app.use("/",employeeRoutes)
app.use("/",about)
app.use("/",contact)
app.use("/",registerRoutes)

//this should always be your last line in your server file
app.listen(3001, () => console.log('listening on port 3001'));
