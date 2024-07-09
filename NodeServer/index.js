const http = require("http");

const server = http.createServer((req, res)=>{
    res.end("Hello from Node server");
})

const port = 5000;
server.listen(port, "localhost", ()=>{
    console.log("Server is running on port:  ", port);
})