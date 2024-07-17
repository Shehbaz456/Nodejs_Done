
//The http. .createServer() method includes request and response parameters which is supplied by Node. js.
// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data.
// The response object can be used to send a response for a current HTTP request.
// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:





const http = require("http");
const path = require("path");
const fs = require("fs");
// console.log(`${__dirname}/10_UserApi/UserApi.json`);
const Server = http.createServer((req,res)=>{

    const data =  fs.readFileSync(`${__dirname}/10_UserApi/UserApi.json`,"UTF-8");
    const objdata = JSON.parse(data);

    if(req.url ==="/"){
        res.end("<h1>this is our Home Page response</h1>");
    }else if(req.url ==="/about"){
        res.end(" <h1>this is AboutUs Page </h1>");
    }
    else if(req.url ==="/userApi"){
        // res.writeHead(200,{"content-type":"application/json"})
        // res.end(objdata[0].urlToImage);
        

        const imageUrl = objdata[0].urlToImage;

        // Extract the image path from the URL
        const imagePath = path.join(__dirname, "10_UserApi", imageUrl);

        // Check if the file exists and send it as a response
        fs.readFile(imagePath, (err, imageData) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>Image not found</h1>");
            } else {
                const ext = path.extname(imagePath).substring(1);
                const contentType = `image/${ext}`;
                res.writeHead(200, { "Content-Type": contentType });
                res.end(imageData);
            }
        });
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1> Error 404 , Page doesn't exist </h1>")
       
    }
});

Server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
})











// const http = require("http");
// const port = 8000;
// const Server = http.createServer((req,res)=>{

//     if(req.url==="/"){
//         res.end("<h1>Hi from Home page</h1>");
//     }
//     else if(req.url==="/about"){
//         // res.writeHead(404,{"Content-type":"text/html"})
        
       
//         res.end("<h1>Hi from about page</h1></br> <p>Hello, it's really a pain to be followed. To be a burden unless it takes criticism because they provide the services of the laudatory pain, it will happen right! At times, from the point of pain, great praise is given to what pleasures they are.</p>" );
//     }
//     else{
//         res.writeHead(404,{"Content-type":"text/html"})
//         res.end(`404 Erorr "Page Note Found" `)
//     }
// })

// Server.listen(port,"127.0.0.1",()=>{
//     console.log(`Active port number ${port}`);
// });
