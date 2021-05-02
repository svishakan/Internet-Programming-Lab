let fs = require("fs");
let rl = require("readline");

let greetings = [];

//Non-blocking file IO
fs.readFile("greetings.txt", (error, data) => {
    if (error) {
        console.error(error);
    } else {
        greetings = data.toString().split("\n");
    }
});

//Interface for the input and output
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Ask for user response
readline.question("What is your name?\n", name => {
    console.log(`\n${greetings[Math.floor(Math.random() * greetings.length)]} ${name}!`);
    readline.close();
});

/*
OUTPUT:

node TerminalGreeting.js
What is your name?
Vishakan

Hi Vishakan!
*/