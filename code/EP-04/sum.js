console.log("Hello World!");

// export const variable = 10   // ES Module syntax
 const variable = 10   // MJS Module syntax

// export const calculatSum = (a, b) => {    // ES Module syntax
//     const sum = a + b;
//     console.log(sum);
    
// }

 const calculatSum = (a, b) => {
    const sum = a + b;
    console.log(sum);
    
}

// module.exports = calculatSum;    // to export single function

// module.exports = {

//     calculatSum: calculatSum,
//     variable: variable

// };    // to export multiple functions or variables wrap them in an object

module.exports = {calculatSum, variable};   // Common Module syntax   