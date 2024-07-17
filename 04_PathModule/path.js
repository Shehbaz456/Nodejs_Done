


// const path = require("path");
// console.log(path.dirname("C:/Users/HP/Music/NodeJs/PathModule/path.js"));
// console.log(path.extname("C:/Users/HP/Music/NodeJs/PathModule/path.js"));
// console.log(path.basename("C:/Users/HP/Music/NodeJs/PathModule/path.js"));


// // console.log(path.parse("C:/Users/HP/Music/NodeJs/PathModule/path.js"));

// const mypath = path.parse("C:/Users/HP/Music/NodeJs/PathModule/path.js");
// console.log(mypath.name);
// console.log(mypath.root);
// console.log(mypath.base);









// const pt = require("path");
// console.log(pt.dirname("C:/Users/HP/Music/Backend web/NodeJs D/04_PathModule\path.js"));









const path = require("path");
console.log(path.dirname("C:/Users/HP/Music/Backend web/NodeJs D/04_PathModule\path.js"));
console.log(path.basename("C:/Users/HP/Music/Backend web/NodeJs D/04_PathModule\path.js"));
console.log(path.extname("C:/Users/HP/Music/Backend web/NodeJs D/04_PathModule\path.js"));

// parse
const mypath = path.parse("C:/Users/HP/Music/Backend web/NodeJs D/04_PathModule\path.js");

console.log(mypath.root );
console.log(mypath.name);
console.log(mypath.base);
console.log(mypath.dir);