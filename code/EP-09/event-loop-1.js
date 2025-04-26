const fs = require('fs');

const a = 100;

setImmediate(() => {
    console.log("setImmediate is called ");
});

fs.readFile("data", "utf-8", () => {
    console.log("File read completed ");
});

setTimeout(() => {
    console.log("setTimeOut is called ");
    
}, 0);

function printA() {
    console.log("Value of a is ", a);
}

printA();
console.log("Last line of the code ");

