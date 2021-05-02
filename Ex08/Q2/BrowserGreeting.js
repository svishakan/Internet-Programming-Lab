let fs = require("fs");
let http = require("http");
let url = require("url");

let greetings = [];

//Non-blocking file IO
fs.readFile("greetings.txt", (error, data) => {
    if (error) {
        console.error(error);
    } else {
        greetings = data.toString().split("\n");
    }
});

//If there is a browser request, serve the request with response
//Listen on port 8080

http
    .createServer((req, res) => {
        let requestQuery = url.parse(req.url, true).query;
        let userName = requestQuery.name;

        res.writeHead(200, { 'Content-Type': 'text/html' });

        if (!userName) {
            res.write(`<h1>Enter your name in the URL as /?name=Mike!</h1>`);
        } else {
            res.write(`<h1>${greetings[Math.floor(Math.random() * greetings.length)]} ${userName}!</h1>`);
        }

        res.end();
    })
    .listen(8080);