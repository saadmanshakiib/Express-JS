const express = require("express");
const path = require("path");
//const router2 = require("./Routes/routes.router");
//const router3 = require("./Routes/user.routes");
const bodyParser = require("body-parser");
// const app = express();

// app.listen(1003);

// app.use("/api",router2);

// app.use("",(req,res)=>{
//     res.send("Something went wrong");
//     res.end();
// })
const app2 = express();
app2.use(bodyParser.urlencoded({extended : true }));
app2.use(bodyParser.json());

app2.listen("1005");
//app2.use(router3);

app2.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname + "/signup.html"));

})

app2.post("/register",(req,res)=>{
    const name2 = req.body.fullname;
    res.send(`<h1>Hello ${name2}</h1>`);
    res.end();
})



