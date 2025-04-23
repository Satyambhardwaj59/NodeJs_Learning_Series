// require("./xyz.js");   // CJS
// require("./sum.js");

// const calculatSum = require("./sum.js");   // Common Module syntax or CJS syntax
// const Sum = require("./sum.js");

// const {calculatSum, variable} = require("./sum.js"); // destructuring the object 

// import {calculatSum, variable} from './sum.js'; // ES Module syntax


// let name = 'Satyam Bhardwaj';
// let age = 20;

// let number = 10;
// let number2 = 20;

// Sum.calculatSum(number, number2);
// console.log(Sum.variable);

// calculatSum(number, number2);
// console.log(variable);


// console.log(`Hello ${name}, you are ${age} years old.`);


 // **************** for Nasted modules   ****************

// const {calculatSum} = require("./calculat/sum");
// const {calculatMultiply} = require("./calculat/multiply");

// const {calculatSum, calculatMultiply} = require("./calculat/index");  

// const {calculatSum, calculatMultiply} = require("./calculat");      // we dont need to write index as path is index.js by default

// calculatSum(number, number2);
// calculatMultiply(number, number2);

// const data = require("./data.json");     // JSON file import

// console.log(data);
// console.log(data.name);


const cripto = require('crypto');

console.log("Hello world");

var a = 107896;
var b = 20986;

// This callback will only be pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("Timeout called after 0 seconds");
}, 0);   // Trust issues with setTimeout

setTimeout(() => {
    console.log("Timeout called after 3 seconds");
}, 3000);

cripto.pbkdf2Sync('password', 'salt', 1000000, 512, 'sha512');
console.log("first key is generated");

setTimeout(() => {
    console.log("Timeout called after 0 seconds");
}, 0);


// async function
cripto.pbkdf2('password', 'salt', 1000000, 512, 'sha512', () => {
    console.log("second key is generated");
});



function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);
console.log("Result: " + c);

