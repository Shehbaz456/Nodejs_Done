// const http =  require("http");
// const server  = http.createServer((req,res)=>{
//     res.end("hello from other side ");
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to port no 8000");
// });



const fs = require("fs")
const http = require("http");

// console.log(__dirname);
// c:\Users\HP\Music\Backend web\NodeJs D\http_server_userapi


    const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/Mybiodata.json`);
    const ObjData = JSON.parse(data);

    if(req.url== "/"){
        res.end("HELLO brother from Home page side");
    }else if(req.url== "/about"){
        res.end("Hi from About page"); 
    }
    else if(req.url== "/datapi"){
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(ObjData[0].name);
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("404 error page does not exist"); 
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening ot the port 8000");
});



