const OrderClass = require('../models/Order')

let Order = new OrderClass()

module.exports = {
    async index(req, res) {
        try {
            let orders = await Order.search()
            let allOrdersLength = orders.length 

            return res.status(200).json({orders, allOrdersLength})
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }
}
