// const { error } = require("console");
// const fs = require("fs");
// fs.writeFile("hello.txt","Hello node " ,(err)=>{
//     console.log("File is Created");
//     console.log("Error is Found or Not: ",err );
// });


// We pass them a function as an argument - a callback 
// That gets called when that task completes.
// The callback has an argument that tells you whether 
// the operation complete Successfully.
// Now we need to say what to do when fs.writeFile 
//has completed (even if its nothing), and start 
// checking for errors.   


// fs.appendFile("hello.txt","\nHello friends this is appended text Ok",(err)=>{
//     console.log("Task completed",err);
// });

// fs.readFile("hello.txt","UTF-8",(err,data)=>{
//     console.log(data);
//     console.log("error",err);
// });




// const fs = require("fs");

// Create File
// fs.writeFile("kalu.php","<!-- 🥳 hello kalu kya hal -->",(err)=>{
//     console.log("error is "+err);
// });

// Append file
// fs.appendFile("kalu.php","<!-- 🥳 hello kalu kya hal -->",(err)=>{
//     console.log("error is "+err);
// });

// read file
// fs.readFile("kalu.php","utf-8",(err,data)=>{
//     console.log("here is file data "+data);
//     console.log("error is "+err);
// }); 

//delete
// fs.unlink("kalu.php",(err)=>console.log("file deleted "+err))



// Challenge 2
// const { log } = require("console");
// const fs = require("fs");

// make dir
// fs.mkdir("SHEHBAZ",(err)=>{
//     console.log(err);
// })

// Create file
// fs.writeFile("./SHEHBAZ/bio.txt","this is my bio data",(err)=>{
//     console.log(err);
// })

// Delete file
// fs.unlink("./SHEHBAZ/bio.txt",(err)=>{console.log("file Deleted");});

// delete folder
// fs.rmdir("./SHEHBAZ", (err)=>{console.log("folder Deleted");});





