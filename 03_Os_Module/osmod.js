const os = require("os");
console.log(os.arch());
console.log(os.hostname());

console.log(os.homedir());

console.log(os.platform());

// window tmpdir
console.log(os.tmpdir());

// version of window
console.log(os.version());

// window type
console.log(os.type());

const freememory = os.freemem();


// console.log(freememory);
// RAM free
console.log(`free RAM memory in GB ${freememory/1024/1024/1024}`);

// Total RAM 
const Totalmemory = os.totalmem();
console.log(`Total RAM memory in GB ${Totalmemory/1024/1024/1024}`);













