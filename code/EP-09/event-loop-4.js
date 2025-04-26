const fs = require('fs');

setImmediate(() => {
    console.log("setImmediate is called ")
    process.nextTick(() => {
        console.log("inner nextTick is called in setImmediate ");
    });
});

setTimeout(() => {
    process.nextTick(() => {
        console.log("inner nextTick is called in setTimeout ");
    });
    console.log("setTimeOut is called ")

}, 0);

Promise.resolve("promise is resolved").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File read completed ");
    process.nextTick(() => {
        console.log("inner nextTick is called in file read ");
    });
});

process.nextTick(() => {
    process.nextTick(() => {
        console.log("inner nextTick is called ");
    });
    console.log("outer nextTick is called ");
});

console.log("Last line of the code ");

/*  Output:-
*
*
* Last line of the code 
* outer nextTick is called 
* inner nextTick is called
* promise is resolved
* setTimeOut is called
* inner nextTick is called in setTimeout
* setImmediate is called
* inner nextTick is called in setImmediate
* File read completed
* inner nextTick is called in file read
*
*
* (Because of event loop only excute or going to next phase when all the nextTick is ceared becaue it has higher priority) 
*/

