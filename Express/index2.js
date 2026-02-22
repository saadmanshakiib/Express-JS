const express = require("express");
const app = express();

app.listen(1111);

app.get("/product/:id", (req,res)=>{
    const id = req.params.id;

    if(!/^[0-9]+$/.test(id)){
        return res.send("Invalid Product ID");
    }

    res.send(`<h1>Product ID : ${id}</h1>`);
});
