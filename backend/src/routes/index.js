const express = require('express')
const routes = express.Router()

const orders = require('./orders')

// rotas de pedidos
routes.use("/pedidos", orders)

// Alias
routes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome"
    })
})

module.exports = routes