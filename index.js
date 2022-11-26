const logEvents = require("./logEvents");

const EventsEmitter = require("events");

class MyEmitter extends EventsEmitter {}

//  initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit("log", "Log event emitted");
}, 2000);
