

const fs = require('fs');
// bad solution
// const server = require('http').createServer();
// server.on('request',(req,res)=>{
//     fs.readFile('./trunk/Day_3/bigImage.jpg',(err,data)=>{
//         if(err) throw err;
//         res.end(data);
//     });
// });
// server.listen(5000, ()=>console.log("server is running!"));


// better solution
const http = require('http');
http.createServer(function(req, res){
    var rs = fs.createReadStream('./trunk/Day_3/bigImage.jpg').pipe(res);

}).listen(4000,'127.0.0.1',()=>console.log('server is running...'));