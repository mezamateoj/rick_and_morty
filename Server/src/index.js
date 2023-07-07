const PORT = 3001
const server = require('./app')


server.listen(PORT, 'localhost', () => {
    console.log(`Server listening on port ${PORT}`)
})


module.exports = server