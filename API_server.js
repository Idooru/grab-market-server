var http = require("http"); // CommonJS으로 모듈을 불러오는 문법, 'http' 모듈을 불러옴
var hostname = "127.0.0.1"; // host(본인 컴퓨터) 주소
var port = 8080;

const server = http.createServer(function (req, res) {
    const path = req.url;
    const method = req.method;
    if (path === "/products") {
        if (method === "GET") {
            res.writeHead(200, { "Content-Type": "applicaiton.json" });
            const products = JSON.stringify([
                {
                    name: "basketBall",
                    price: 5000,
                },
            ]);
            res.end(products);
        } else if (method === "POST") {
            res.end("생성되었습니다!");
        }
    }
    res.end("Good Bye");
});

server.listen(port, hostname);

console.log(`running at http://${hostname + ":" + port}`);
console.log("Grab market server on!");
