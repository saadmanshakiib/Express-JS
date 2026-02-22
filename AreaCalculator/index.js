const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(1000);
app.get("/ok",(req,res)=>{
    res.send("OK");
})

app.get("/cal",(req,res)=>{
    res.sendFile(path.join(__dirname + "/model.html"));
})

app.get("/triangle",(req,res)=>{
    res.sendFile(path.join(__dirname + "/triangle.html"));
})

app.post("/triangle",(req,res)=>{
    const base = req.body.baseName;
    const height  = req.body.heightName;

    const result = 0.5 * base * height;

    res.send(`<h1>Result : ${result}</h1>`)

})

app.get("/circle",(req,res)=>{
    res.sendFile(path.join(__dirname + "/Circle.html"));
})

app.post("/circle",(req,res)=>{
    const r = req.body.radius;
        res.send(`<h1>Result : ${3.14 * r * r}</h1>`)
})