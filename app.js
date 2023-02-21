const express = require("express");
const https = require("https"); //native node module
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.get("/",(req,res)=>{
    res.render();
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server started on port 3000");
}); 