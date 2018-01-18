
const fs = require('fs');

const readFile = (filePath) => {
    var rs = fs.createReadStream(filePath,'utf8');
    rs.on('data', chunk => {
        process.send(chunk);
    });
    rs.on('end',data => {
        process.send('e');
    });
}


process.on('message', (filePath) => {
    const chunk = readFile(filePath);
});