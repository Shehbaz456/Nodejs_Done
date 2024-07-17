// const add = (a,b)=>{
//     return a+b;
// }
// const sub = (a,b)=>{
//     return a-b;
// }
// const multi = (a,b)=>{
//     return a*b;
// }

// let name = " vinod bahadur thapa"
// module.exports = { add, sub, multi};





let Add = (a,b) =>{
    return a+b;
}
let Table_of = (a) =>{
    let c;
    for (let i = 1; i <= 10; i++) {
        c = a*i;
        console.log(c);
     
    } 
}

module.exports = {Add,Table_of};




