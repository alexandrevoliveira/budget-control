const express = require('express')
const routes = express.Router()

const OrderController = require('../app/controllers/OrderController')

routes.get("/", OrderController.index)

module.exports = routes