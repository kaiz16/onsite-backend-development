const http = require('http')
const server = http.createServer(function (req, res) {
    console.log("Hello World")
    res.end("Hello World")
})

server.listen(8080)