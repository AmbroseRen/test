var http =require("http");

var server = http.createServer(function (req,res) {
    res.writeHead(200,{"Context-type":"text/html;charset=UTF-8"});
    res.end('Hellp World!');
})

server.listen(3000,"127.0.0.1");
