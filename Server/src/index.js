// const express = require('express')
// const server = express()
const PORT = 3001
// const router = require('./routes/index')
const server = require('./app')

// const http = require('http')
// node way of creating server
// const server = http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes('/rickandmorty/character')) {
//         const id = parseInt(req.url.split('/').pop());
//         getCharById(res, id)
//     }

// });
// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });


// server.use(express.json())  // json info get transform into js obj
// server.use('/rickandmorty', router)




server.listen(PORT, 'localhost', () => {
    console.log(`Server listening on port ${port}`)
})


module.exports = server