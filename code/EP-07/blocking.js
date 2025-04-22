const cripto = require('crypto');

console.log("Hello world");

var a = 107896;
var b = 20986;

// pbkdf2 - Password-Based Key Derivation Function 2

// sync function

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