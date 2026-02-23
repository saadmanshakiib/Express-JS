const express = require("express");
const app = express();
const path = require("path");
app.listen(1111);

app.use(express.urlencoded({extended : true}));

const user = [
        {
                name : "Sadman",
                age : 22
        },
        {
                name : "Sakib",
                age : 23
        }
]


const form = `
<h1>Form</h1>
<form method = "POST" action = "/users">
<input type="text" name = "name" placeholder = "Enter Your Name" />
<input type="text" name = "age" placeholder = "Enter Your Age" />
<button type="submit">Save</button>
</form>
`;

app.get("/users",(req,res)=>{
        res.send(form);
})

app.post("/users",(req,res)=>{
        const name = req.body.name;
        const age = Number(req.body.age);

        const newUser = {name,age};
        user.push(newUser);

        res.status(200).json(
                {
                        success : true,
                        user
                }
        )
})