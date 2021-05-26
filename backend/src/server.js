/* IMPORTANDO MODULOS */
const express = require('express')  // importamos o modulo express (servidor) na variavel express
const routes = require('./routes')
const cors = require('cors')

const server = express() // criação do servidor na variável server
const port = process.env.PORT || 3333

server.use(express.json()) //recognize the incoming Request Object as a JSON Object
server.use(express.urlencoded({ extended: true })) //recognize the incoming Request Object as strings or arrays. urlencoded é um parser das informações vindas no corpo da requisição.

server.use(cors())

server.use(routes) // rotas

// escutando o servidor na porta 5000
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

