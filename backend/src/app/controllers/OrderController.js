const OrderClass = require('../models/Order')

let Order = new OrderClass()

module.exports = {
    async index(req, res) {
        try {
            let { page, limit } = req.query

            let offset = limit * (page - 1)

            let orders = await Order.search(limit, offset)

            return res.status(200).json({orders})
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }
}
