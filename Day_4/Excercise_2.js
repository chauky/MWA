const os = require('os');

function myObservable(observer){
    observer.next("System is checked succesfully.");
    observer.complete();

}

const observer = {
    next: function(value){console.log(value)},
    error: function(e){},
    complete:function(){console.log('complete')},
};


function checkCPU() {
    console.log("Checking your system...")
    if (os.cpus().length <= 2) {
        console.log("Processor is not supported")
    }
    else if (os.totalmem() < 4 * 1024) {
        console.log("This app needs at leat 4GB of RAM");
    }
    else {
        myObservable(observer);
    }
}

checkCPU();
