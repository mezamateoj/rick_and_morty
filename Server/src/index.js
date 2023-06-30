const getCharById = require('./controllers/getCharById');
const { postFav, deleteFav } = require('./controllers/handleFavorites')
const loginInfo = require('./controllers/login')
const createImg = require('./controllers/createAI')
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express()
const port = 3001

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


server.use(express.json())
// server.use(bodyParser.json());
// server.use(cors());

server.use('/rickandmorty', getCharById)
server.use('/rickandmorty', postFav)
server.use('/rickandmorty', deleteFav)
server.use('/rickandmorty', loginInfo)
server.use(createImg)




server.listen(port, 'localhost', () => {
    console.log(`Server listening on port ${port}`)
})


module.exports = server