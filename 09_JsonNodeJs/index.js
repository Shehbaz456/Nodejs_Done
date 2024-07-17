// JSON stands for javaScript object Notaction(JSON) 
// JSON is a lightweight for storing and transporting data.
// JSON  is often used when data is send from server

// const BioData = {
//     Name : "Shehbaz",
//     PCName : "Ultimo",
//     Age:21
// }

// console.log(BioData.PCName)
// const jsonData = JSON.stringify(BioData);
// console.log(jsonData);
// const ObjData = JSON.parse(jsonData);
// console.log(ObjData);





// // Chalange Time
// const fs = require("fs");
// const BioData1 = {
//     Name : "Shehbaz",
//     PCName : "Ultimo",
//     Age:21
// }

// const jsonData = JSON.stringify(BioData1);
// // console.log(jsonData);
// fs.writeFile("json1.json",jsonData,()=>{
//     // console.log("write file error",err)
// });

// fs.readFile("json1.json","utf-8",(err,data)=>{
//     const objdata = JSON.parse(data);
//     console.log("read file data",objdata);
//     // console.log("read file error",err)
// })






// const fs = require("fs")

// let obj = {
//     name:"shehbaz",
//     age:19,
//     Program:"BCA",
//     College:"Tecnia institute of advance studies",
//     Friend_Name:"Afroz"
// }


// const jsonData = JSON.stringify(obj);
// fs.writeFileSync("Mybiodata.json",jsonData);
// fs.unlinkSync("Mybiodata.json");
// console.log(jsonData);

// const objdata = JSON.parse(jsonData);
// console.log(objdata);
// console.log(objdata.name);





// const fs = require("fs");

// let obj = {
//     Name:"Shehbaz",
//     Age: 19,
//     Enrol: 1917002021
// }



// const json_data = JSON.stringify(obj);
// fs.writeFileSync("Hello.json",json_data)
// // fs.unlinkSync("HELLO.json");
// console.log(json_data);

// const obj_data = JSON.parse(json_data);
// console.log(obj_data);

// const buf_data = fs.readFileSync(`${__dirname}/Hello.json`);
// const org_data = buf_data.toString();
// console.log(org_data);



const fs = require('fs')
const obj_student ={
    Name:"Shehbaz",
    Age: 19,
    Enrol: 1917002021
}

// put into json 
const stuJson = JSON.stringify(obj_student)
fs.writeFile("hi2.json",stuJson,(err)=>{
    console.log("error",err);
})

