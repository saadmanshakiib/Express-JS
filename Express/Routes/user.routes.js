const express = require("express");
const router = express.Router();

router.get("/ok",(req,res)=>{
    res.send("All ok");
})

router.post("/user",(req,res)=>{
   const name2 = req.body.name;
    res.send(`<h1>Welcome ${name2}</h1>`);

})



module.exports = router;
