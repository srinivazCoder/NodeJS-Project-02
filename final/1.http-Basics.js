const http = require('http');

const {readFileSync} = require("fs")

const homePage = readFileSync('../public/index.html');

const server = http.createServer((req, res) => {

    console.log(req.url) 
    let url = req.url;
 
    if (url === "/") {
        res.writeHead(200, { 'content-type': 'text/html' });
        // res.writeHead(200,{'content-type':'text/plain'});
        res.write(homePage) 
        res.end();
    } else if (url === "/about") {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>about page</h1>')
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1 style="color:red">Page not found</h1>')
        res.end();
    }
})

server.listen(5000)