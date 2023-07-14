const express = require('express')
const server = express()
const router = require('./routes/index')
const cors = require('cors')

// const http = require('http')
// node way of creating server
// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes('/rickandmorty/character')) {
//         const id = parseInt(req.url.split('/').pop());
//         getCharById(res, id)
//     }

// });
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(cors())

server.use(express.json())  // json info get transform into js obj
server.use('/rickandmorty', router)


module.exports = server