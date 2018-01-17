var fs = require('fs');
var zlib = require('zlib');

//zip file
// var gzip = zlib.createGzip();
// var readable = fs.createReadStream(__dirname + '/source.txt');
// var compressed = fs.createWriteStream(__dirname+'/destination.txt.gz');
// readable.pipe(gzip).pipe(compressed);

//Unzip file
var gunzip = zlib.createGunzip();
var readable = fs.createReadStream(__dirname + '/destination.txt.gz');
var extract = fs.createWriteStream(__dirname+'/source.txt');
readable.pipe(gunzip,{end: false}).pipe(extract);