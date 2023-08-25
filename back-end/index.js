const http = require('http');
const fs = require("fs");

http.createServer((req, res) => {
    fs.readFile("../front-end/index.html", (err, data) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("file not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);