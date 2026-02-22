console.log("HTTP Module");

const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req,res)=>{

    const handleFiles=(statusCode,file)=>{
fs.readFile(file,(err,data)=>{
    res.writeHead(statusCode,{"Content-type" : "text/html"});
    res.write(data);
    res.end();
})
}

if(req.url === "/"){
    handleFiles(200,"index.html");
}
else if(req.url === "/about"){
        handleFiles(200,"about.html");
}
else if(req.url === "/contact"){
        handleFiles(200,"contact.html");
}
else{
    res.writeHead("500",{"Content-type" : "text/pain"});
    res.write("Server Error");
    res.end();
}
});


myServer.listen(1111,()=>{
    console.log("Server is running at 1111");
})