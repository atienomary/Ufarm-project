const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const mongoose= require("mongoose");
const bodyParser= require("body-parser");
const session= require("express-session");
const passport = require("passport");


// we are creating an environment
// require("dotenv").config();
const User = require("./models/userModel")
// importing database file directly
const config = require("./config/database");
const employeeRoutes = require("./routes/employeeRoutes");
const homepageRoutes = require("./routes/homepageRoutes");
const contactRoutes = require("./routes/contactRoutes");
const agricRoutes = require("./routes/agricRoutes");
const registerRoutes = require("./routes/registerRoutes");
const cartRoutes= require("./routes/cartRoutes");
const signupRoutes= require("./routes/signupRoutes");
const loginRoutes= require("./routes/loginRoutes");
const aoRoutes= require("./routes/aoRoutes");
const ufRoutes= require("./routes/ufRoutes");
const foRoutes= require("./routes/foRoutes");
const productRoutes= require("./routes/productRoutes");
const deliveryRoutes= require("./routes/deliveryRoutes");
const paymentsRoutes= require("./routes/paymentsRoutes");

// const {config}  = require('process');

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname , "public/products")))
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// creating a connection between the controller and database
mongoose.connect(config.database,{
    //useNEW collects data then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db= mongoose.connection
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


const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, 'images')
    },
    filename: (req, file, cb)=> {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))

    }
})

const upload = multer({storage: storage})

app.set("view engine", "ejs");

app.get("/upload", (req, res)=> {
    res.render("upload");
});

app.post("/upload", upload.single("image"), (req, res)=> {
    res.send("image uploaded");
});


// //_dirname:it will resolve to your project folder
// router.get("/", (req,res)=>{
//  res.sendFile(path.join(__dirname + "/index.html"))
// });

// router.get("/about", (req,res)=>{
//   res.sendFile(path.join(__dirname + "/about.html"))
// });

// // add the router
// app.use("/", router)
// app.use("/about",router)


app.use("/",employeeRoutes);
app.use("/",homepageRoutes);
app.use("/",contactRoutes);
app.use("/",agricRoutes);
app.use("/",registerRoutes);
app.use("/",cartRoutes);
app.use("/",signupRoutes);
app.use("/",loginRoutes);
app.use("/",aoRoutes);
app.use("/",ufRoutes);
app.use("/",foRoutes);
app.use("/",productRoutes);
app.use("/",paymentsRoutes);
app.use("/",deliveryRoutes);

app.get("*", (req,res)=>{
    res.status(404).send("page does not exist")
})






// this should always be the last line in your server file
app.listen(3000, () => console.log('listening on port 3000'));



