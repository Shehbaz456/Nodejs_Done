// REPL (read evil print loop)
// 1: js Expression
// 2: Use Variable
// 3: Multiline code / loops
// 4: use (_) to get the last result
// 5: We can use editor mode



// include node fs module
// const fs = require('fs');

// Creating a new File
// fs.writeFileSync("read.txt","this is me writeFileSync ok");

// append a new File
// fs.appendFileSync('read.txt',"this isi append text Ok boss");


// fs.readFileSync

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// Node.js includes an additional data type called Buffer
// (not available in browser's javaScript).
// Buffer is mainly used to store binary data.
// While reading from a file or receiving packets over the network.

// {/* <Buffer 74 68 69 73 20 69 73 20 6d 65 20 77 72 69 74 65 46 69 6c 65 53 79 6e 63 20 6f 6b 74 68 69 73 20 69 73 69 20 61 70 70 65 6e 64 20 74 65 78 74 20 4f 6b ... 5 more bytes> */}

// sol 
// const buf_data = fs.readFileSync('read.txt');
// let org_data = buf_data.toString();
// console.log(org_data);


// fs.renameSync('read.txt',"Read_Write.txt");


// the Practice Fs module


// const fs = require('fs');

// fs.writeFileSync("P1.txt","This is practice set text");

// fs.appendFileSync('P1.txt',"\nAppended Text here");

// let buf_data = fs.readFileSync('P1.txt');
// let org_data = buf_data.toString();
// console.log(org_data);

// fs.mkdirSync("thapa_CURD");
// fs.rmdirSync("thapa_CURD");







// file module 
// const fs = require("fs");

// // Create file
// fs.writeFileSync('write.py'," // this is php file");

// // Update file
// fs.appendFileSync('write.py'," // appended files ");

// // read file
// let buf_data = fs.readFileSync('write.py');
// let org_data = buf_data.toString();
// console.log(org_data);

// // rename file
// fs.renameSync("write.py","hello.py");

// // delete file
// fs.unlinkSync("hello.py");







// const { log } = require("console");
// const fs = require("fs");

// // CREATE Folder
// // fs.mkdirSync("HELLO_BABA");

// // create and append file
// fs.writeFileSync("HELLO_BABA/hello.txt","HELLO OK");
// fs.appendFileSync("HELLO_BABA/hello.txt"," this is appended paragraph");

// // READ
// const org_data = fs.readFileSync("HELLO_BABA/hello.txt").toString();
// console.log(org_data);

// // RENAME
// fs.renameSync("HELLO_BABA/hello.txt","HELLO_BABA/HELLO.txt");

// // // Delete file 
// fs.unlinkSync("HELLO_BABA/hello.txt");


// // Delete file
// fs.rmdirSync("HELLO_BABA");
 




const fs = require("fs");
const path = require("path")

console.log(__dirname)
console.log(path.join(__dirname,"copy"))
let copypath = path.join(__dirname,"copy")

fs.appendFile(`${copypath}/help.txt`,"\nHello sarkar kya hal",(err)=>{
    if(err){
        console.log("file not created",err);
    }
    else {
        console.log(" File Creted Created ok Successfuly");
    }

})

// fs.rmdir(`${copypath}`,(err)=>console.log("folder deleted", err ));




