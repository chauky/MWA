const url = require('url');
const http = require('http');
var path = require('path');

const {fork} = require('child_process');
const server = http.createServer();

server.on('request', (req, res) => {
    var pathName = req.url;
    var filePath = pathName.substring(6, pathName.length);
    const childProcess = fork(__dirname + '/ReadFile.js');
    childProcess.send(filePath);
    childProcess.on('message', chunk => {
        if (chunk !== 'e') {
            console.log(chunk);
        }
        else{
            res.end();
        }
    });
});

server.listen(4000);


