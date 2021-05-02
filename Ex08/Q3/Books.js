let fs = require("fs");
let http = require("http");

//If there is a browser request, serve the request with html page
//Listen on port defined under PORT
//Use non-blocking file I/O

const PORT = 8080;

http
    .createServer((req, res) => {
        if (req.url === "/books") {
            fs.readFile("booklist.html", function (error, content) {
                if (error) {
                    res.writeHead(404);
                    res.write("Content Not Found!");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.write(content);
                }
                res.end();
            });
        } else {
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.write("<h1>Kindly navigate to /books to see your content!");
        }
    })
    .listen(PORT);

console.log("Server listening on port " + PORT);