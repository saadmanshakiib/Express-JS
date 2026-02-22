const express = require("express");
const app = express();

app.listen(2000);

const middleWire=(req,res,next)=>{
console.log("Middle wire is ok");
req.currentTime = new Date(Date.now());
next();
}


app.get("/ok",middleWire,(req,res)=>{
    console.log("I am Okay" + req.currentTime);
    res.send("I am good");
})
app.get("/about",middleWire,(req,res)=>{
    console.log("About Path is good");
    res.send("I am about path");
})

