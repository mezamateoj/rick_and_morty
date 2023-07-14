const PORT = 3001
const server = require('./app')
const { conn } = require('./db_connection')

conn.sync({ force: true }).then(
    server.listen(PORT, 'localhost', () => {
        console.log(`Server listening on port ${PORT}`)
    })

)



module.exports = server