// const fs = require('fs')
const http = require('http')
// const data = require('./utils/data');
// import axios from 'axios';
const getCharById = require('./controllers/getCharById');


// function makeDataRequest(type, cb) {
//     // fs.readFile('./utils/data.js', 'utf8', (err, data) => {
//     //     if (err) {
//     //         cb(err, null)
//     //     } else {
//     //         const parsedData = JSON.parse(data)
//     //         cb(null, parsedData[type])
//     //     }
//     // })
//     const parsedData = data[type];
//     cb(null, parsedData);
// }

// function handleGetRequest(req, res) {
//     if (req.url.includes('/rickandmorty/character/')) {
//         console.log(req.url)
//         const id = parseInt(req.url.split('/').pop());
//         console.log(id)
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(data[id]))
//         // const id = Number(req.url.split('/').pop());
//         // makeDataRequest(id, (err, data) => {
//         //     if (err) {
//         //         res.writeHead(500, { 'Content-Type': 'text/plain' })
//         //         res.end('Server error')
//         //     } else if (data) {
//         //         res.writeHead(200, { 'Content-Type': 'application/json' })
//         //         res.end(JSON.stringify(data))
//         //     } else {
//         //         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         //         res.end('Character not found');
//         //     }
//         // })
//     }
// }



const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes('/rickandmorty/character')) {
        const id = parseInt(req.url.split('/').pop());
        getCharById(res, id)
    }

});

server.listen(3001, 'localhost', () => {
    console.log('Server is listening on port 3001')
})


module.exports = server