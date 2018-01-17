var EventEmitter = require('events');
class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => this.emit('tick'), 1000);
    }
}

var test = new Clock();
test.on('tick', () => console.log("woohoo"));
