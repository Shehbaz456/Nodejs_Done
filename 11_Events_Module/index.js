// Events module
// node.js has a built-in module called - Events 
// where you can create- , fire- and listen - for your own events.

// example - registring for the event to be fired only onetime using once.


// const EventEmitter = require("events");
// const event = new EventEmitter();

// // event.on("SayHello",()=>{
// //     console.log("your name is Shehbaz ");
// // });
// // event.on("SayHello",()=>{
// //     console.log("your name is Shehbaz ");
// // });
// // event.emit("SayHello");

// event.on("checkPage",(sc,msg)=>{
// console.log(`Status code is ${sc} , and page is ${msg}`);
// })
// event.emit("checkPage",200,"Ok");


















// const EventEmitter = require("events");
// const event = new EventEmitter();

// // event.on("sumOn",()=>{
// //     console.log("Say Hello ULTIMO ");
// // });
// // event.on("sumOn",()=>{
// //     console.log("Say Hello SHEHBAZ");
// // });
// // event.on("sumOn",()=>{
// //     console.log("Say Hello ODIN");
// // });
// event.on("checkpage",(sc,msg)=>{
//     console.log(`Say Hello ODIN status code ${sc} and message ${msg}`);
// });

// event.emit("checkpage",200,"OK");






const EventEmitter = require("events");
const event = new EventEmitter();

event.on("SalmanBhai",(sc,msg)=>{
    console.log(`Salman bhai kya hal status code ${sc} and msg ${msg}`);
});                                    

event.emit("SalmanBhai",200,"OK");

