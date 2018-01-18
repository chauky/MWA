const os = require('os');

function checkCPU() {
    console.log("Checking your system...")
    if (os.cpus().length <= 2) {
        console.log("Processor is not supported")
    }
    else if (os.totalmem() < 4 * 1024) {
        console.log("This app needs at leat 4GB of RAM");
    }
    else {
        console.log("System is checked succesfully.");
    }
}
checkCPU();