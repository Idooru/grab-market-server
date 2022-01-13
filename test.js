var http = require("http"); // CommonJS으로 모듈을 불러오는 문법, 'http' 모듈을 불러옴
var hostname = "127.0.0.1"; // host(본인 컴퓨터) 주소
var port = 8080;

const server = http.createServer(function (req, res) {
    console.log("REQUEST : ", req);
    res.end("Hello Client!");
});

server.listen(port, hostname);

console.log("Grab market server on!");
