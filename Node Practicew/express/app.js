const express = require('express');
const userRouter = require("./routes/users.router");
const app = express();

app.use("/api",userRouter);
app.listen(1001);

app.use((req,res)=>{
    res.end("Invalid URL");
})
