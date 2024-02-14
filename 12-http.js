const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to the jungle')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Can't find the page you're looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(5000)