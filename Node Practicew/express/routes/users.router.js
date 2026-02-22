const express = require("express");

const router = express.Router();


router.get("/home",(req,res)=>{
   // res.send("This is home page");
     res.cookie("name","sadman");
    res.cookie("id","53467");
    res.end();
})

router.post("/login",(req,res)=>{
    res.send("This is login page");
    res.end();
})

router.put("/update",(req,res)=>{
    res.send("This is update request");
    res.end();
})

router.delete("/delete",(req,res)=>{
    res.send("This is update request");
})

const path = require("path");

router.get("/view", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/data",(req,res)=>{
    res.json({
    "name" : "MD Sadman Al Sakib",
    "ID" : "23-53467-3",
    "Department" : "Computer Science & Engineering",
    "Major" : "Software Engineering"
    });
})

module.exports = router;