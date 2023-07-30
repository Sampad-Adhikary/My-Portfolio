const express = require("express");
const https = require("https"); //native node module
const bodyParser = require("body-parser");
const { currTime } = require("./time");
const date = require(__dirname+"/time.js");
// var admin = require("firebase-admin");

// var serviceAccount = require("secure\serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=jalandhar&appid=5d2cfe6d30748f1f07f9352ed612d3bb&units=metric";
    https.get(url,(response)=>{
        response.on("data",(data)=>{
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon;
        var day = date.currDate();
        var time = currTime();
        res.render('index.ejs',{currentDate: day,currTime:time,currTemp:temp});
        });
    });
});

app.post("/formsubmit",(req,res)=>{
    firstname = req.body.get('firstname')
    lastname = req.body.get('lastname')
    subject = req.body.get('subject')
    email = req.body.get('email')
    message = req.body.get('message')
    res.redirect("/")
});

app.listen(3000,(req,res)=>{
    console.log("server started at port: 3000");
}) 