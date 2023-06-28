const fs = require('fs')
const http = require('http')


function makeDataRequest(type, cb) {
    fs.readfile('./utils/data.js', 'utf8', (err, data) => {
        if (err) {
            cb(err, null)
        } else {
            const parsedData = JSON.parse(data)
            cb(null, parsedData[type])
        }
    })
}

function handleGetRequest(req, res) {
    if (req.url === '/rickandmorty/character') {
        makeDataRequest('character', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                res.end('Server error')
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(data))
            }
        })
    }
}



const server = http.createServer((req, res) => {
    const {method} = req;
    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        default:
            throw new Error(`Method not supported ${method}}`);
    }
    // res.end('Hello World')
}
)

server.listen(30001, () => console.log('Server running on port 30001'))


module.exports = server