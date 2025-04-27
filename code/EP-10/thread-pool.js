const fs = require('fs');
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2; // Set the thread pool size to 2

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
    console.log("1 - crypto.pbkdf2 done");
    
});
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
    console.log("2 - crypto.pbkdf2 done");
    
});
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
    console.log("3 - crypto.pbkdf2 done");
    
});


crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
    console.log("4 - crypto.pbkdf2 done");
    
});
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, key) => {
    console.log("5 - crypto.pbkdf2 done");
    
});
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log('file read done');
});