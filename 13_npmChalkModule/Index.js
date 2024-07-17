// const chalk = require("chalk");
import chalk from 'chalk';
console.log(chalk.blue.bgYellow.bold('Hello world!'));
import http from "http"
// const http = require("http")

const port = 8000 || process.env ;

const app = http.createServer((req,res)=>{
    if (req.url == "/") {
        res.end("<html><body><h1>Hello From Home India </h1></body></html>")
    }
    else if(req.url == "/about"){
        res.end("<html><body><h3>About for Indian Army </h3></body></html>")
    }
    else if(req.url == "/contact"){
        res.end("<html><body><h3>Contact for Indian Army </h3></body></html>")
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body></html>')
    }
})

app.listen(port,"127.0.0.1",()=>{
    console.log(`App is runing on the port ${port}`, );
})
