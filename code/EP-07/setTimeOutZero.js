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


function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);
console.log("Result: " + c);
