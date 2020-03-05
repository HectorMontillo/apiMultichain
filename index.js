const app = require('./app')
const server = require('http').Server(app)

server.listen(8000, () => {
    console.log('Servidor escuchando ')
})