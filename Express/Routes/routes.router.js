const express = require("express");

const route = express.Router();

//req query
route.get("/home",(res,req)=>{
    req.send("Home is ok");
})

route.get("/getid",(req,res)=>{
    const id = req.query.id;
    const name = req.query.name;
    res.send(`Student id : ${id}\n Name : ${name}`);
})

//req params
route.get("/userId/:id/userName/:name",(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    res.send(`<h1>Name : ${name}</h1>`);
    
})

//headers

route.get("/",(req,res)=>{
    const id = req.header.id;
    const name = req.header.name;
    res.send(`<h1>Name : ${name} ID : ${id} </h1>`);
    res.end();
})

module.exports = route;