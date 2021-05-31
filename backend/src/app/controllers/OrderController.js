const OrderClass = require('../models/Order')

let Order = new OrderClass()

module.exports = {
    async index(req, res) {
        try {
            let { page, limit } = req.query

            let offset = limit * (page - 1)

            let orders = await Order.search(limit, offset)
            let allOrders = await Order.findAll()
            let allOrdersLength = allOrders.length 

            return res.status(200).json({orders, allOrdersLength})
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }
}
