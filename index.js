const express = require("express");
const app = express();

app.listen(2000);

app.get("/ok",(req,res)=>{
    res.send("I am good");
})