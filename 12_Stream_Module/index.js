// // 2 way 
// // Reading from Stream
// // Create a readable straem
// // Handel a stream events  date end and error

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer();

// server.on("request",(req,res)=>{
//     // fs.readFile("input.txt",(err,data)=>{
//     //     if (err) {
//     //        return console.log(err);
//     //     }
//     //     res.end(data.toString())
//     // })

//     // 2nd way 
// // Reading from Stream
// // Create a readable straem
// // Handel a stream events  => date end and error

//     // const rstream = fs.createReadStream("input.txt");
//     // rstream.on("data",(chunkData)=>{
//     //     res.write(chunkData);
//     // })
//     // rstream.on("end",()=>{
//     //     res.end();
//     // })
//     // rstream.on("error",(err)=>{
//     //     console.log(err)
//     //     res.end("file not found");
//     // })


//     // 3rd way 
//     const rstream = fs.createReadStream("input.txt");
//     rstream.pipe(res)

// }) 
  
// server.listen(8000,"127.0.0.1");















// strinming 

const fs = require("fs");
const http = require("http");
const server = http.createServer()

server.on("request",(req,res)=>{
    // way 1 
//    fs.readFile("input.txt",(err,data)=>{
//     if(err){
//       return console.log(err);
//     }
//     res.end(data.toString());
//    })


    // Way 2
    // const rstrem = fs.createReadStream("input.txt");

    // rstrem.on("data",(chankdata)=>{
    //     res.write(chankdata);
    // })
    // rstrem.on("end",()=>{
    //     res.end();
    // })
    // rstrem.on("error",(err)=>{
    //     res.end(err);
    // })

    // way 3
    const rstrem = fs.createReadStream("input.txt");
    rstrem.pipe(res)

})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Active port 8000 ")
})


