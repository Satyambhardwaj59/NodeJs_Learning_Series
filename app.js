// require("./xyz.js");   // CJS
// require("./sum.js");

// const calculatSum = require("./sum.js");   // Common Module syntax or CJS syntax
// const Sum = require("./sum.js");

// const {calculatSum, variable} = require("./sum.js"); // destructuring the object 

// import {calculatSum, variable} from './sum.js'; // ES Module syntax


let name = 'Satyam Bhardwaj';
let age = 20;

let number = 10;
let number2 = 20;

// Sum.calculatSum(number, number2);
// console.log(Sum.variable);

// calculatSum(number, number2);
// console.log(variable);


// console.log(`Hello ${name}, you are ${age} years old.`);


 // **************** for Nasted modules   ****************

// const {calculatSum} = require("./calculat/sum");
// const {calculatMultiply} = require("./calculat/multiply");

// const {calculatSum, calculatMultiply} = require("./calculat/index");  

const {calculatSum, calculatMultiply} = require("./calculat");      // we dont need to write index as path is index.js by default

calculatSum(number, number2);
calculatMultiply(number, number2);

const data = require("./data.json");     // JSON file import

console.log(data);
console.log(data.name);
