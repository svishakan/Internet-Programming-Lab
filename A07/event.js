//Import events module
let events = require("events");

//Define an event emitter object
let eventEmitter = new events.EventEmitter();


//Define an event handler
let helperHandler = function helperFunction(){
        console.log("Please help me.");
    };

//Bind the event listener to the event handler    
eventEmitter.addListener("help", helperHandler);

//Trigger the event
eventEmitter.emit("help");

console.log("Program ended.");


/*
OUTPUT:
Command: node event.js

Please help me.
Program ended.
*/
