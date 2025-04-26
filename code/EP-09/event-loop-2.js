const fs = require('fs');

const a = 100;

setImmediate(() => {
    console.log("setImmediate is called ");
});

Promise.resolve("promise is resolved").then(console.log);



fs.readFile("./file.txt", "utf-8", () => {
    console.log("File read completed ");
});


setTimeout(() => {
    console.log("setTimeOut is called ");
    
}, 0);

process.nextTick(() => {
    console.log("nextTick is called ");
});

function printA() {
    console.log("Value of a is ", a);
}

printA();
console.log("Last line of the code ");


// Output:- 

// Value of a is  100
// Last line of the code
// nextTick is called
// promise is resolved
// setTimeOut is called
// setImmediate is called
// file read completed

