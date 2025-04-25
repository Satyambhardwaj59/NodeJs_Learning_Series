const fs = require('fs');

setImmediate(() => console.log("1st setImmediate is called "));
setTimeout(() => console.log("1st setTimeOut is called "), 0);

Promise.resolve("promise is resolved").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {

    setTimeout(() => console.log("2nd setTimeOut is called "), 0);
    process.nextTick(() => console.log(" 2nd nextTick is called "));
    setImmediate(() => console.log(" 2nd setImmediate is called "));
    console.log("File read completed ");
});

process.nextTick(() => console.log(" 1nd nextTick is called "));
console.log("Last line of the code ");

// Output:-
// Last line of the code
// 1st nextTick is called
// promise is resolved
// 1st setTimeOut is called
// 1st setImmediate is called
// flile read completed
// 2nd nextTick is called
// 2nd setImmediate is called       /// Because of event loop waiting in Poll phase so setImmediate is excuted before setTimeout
// 2nd setTimeOut is called