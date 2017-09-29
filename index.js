var http = require('http')

console.log('Starting server...')
cont server = http.createServer()

server.on('request', (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write('HELLO WORLD!')
    response.end();
})

server.listen(8080)
console.log('Server running on http://127.0.0.1:8080/')
