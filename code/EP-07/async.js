const { log } = require('console');
const fs = require('fs');

const https = require('https');

console.log("Hello world");

var a = 107896;
var b = 20986;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data Successfully");
    
});

setTimeout(() => {
    console.log("Timeout called after 5 seconds");
}, 5000);

// sync functions are blocking
fs.readFileSync("./file.txt", "utf8",);

console.log('blocking code excuted');



// async functions are non-blocking
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("async file data: " , data);
    
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);
console.log("Result: " + c);