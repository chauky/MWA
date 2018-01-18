const os = require('os');

function checkCPU() {
    console.log(os.cpus().length);
    //console.log(os.totalmem());
   //console.log(os.freemem())

}
checkCPU();