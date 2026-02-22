console.log("Learning FS Module");

const fs = require('fs');

fs.writeFile("sadman.txt","Writing For the first time", (err)=>{
    if(err){
        console.error(err);
    }
})

fs.writeFile("sakib.txt" , "saadman sakib", (err)=>{
    if(err){
        console.log("Error while creating file");
    }
})

fs.appendFile("sadman.txt","Writing using append function", (err)=>{
    if(err){
        console.error(err);
    }
});

fs.readFile("sadman.txt","utf-8", (err,data)=>{
    if(err){
        console.error(err);
    }
    else console.log(data);
})

fs.readFile("sakib.txt","utf-8", (err,data)=>{
    if(err){
        console.error(err);
    }
    else console.log(data);
})

fs.rename("sadman.txt","sadmanshakib.txt",(err)=>{
    if(err){
        console.error(err);
    }
    else console.log("Successfully renamed file");
})

fs.exists("sakib.txt",(err,data)=>{
    if(err){
        console.error(err);
    }
    else console.log(data);
})