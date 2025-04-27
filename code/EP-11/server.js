const http = require('http');

const server = http.createServer( function (req, res) {
    if(req.url === "/getData"){
        res.end('There is no data to get!');
    }
    res.end('Hello World!');
});

server.listen(3000);