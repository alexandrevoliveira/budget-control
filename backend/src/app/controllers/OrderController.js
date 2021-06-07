const OrderClass = require('../models/Order')

let Order = new OrderClass()

module.exports = {
    async index(req, res) {
        try {
            let { filter } = req.query

            const getParamsAsObject = (query) => {
                query = query.replace(/[{}\s]/g, "").split(",")

                const arrayOfParams = query.map(filter => filter.replace(/["\s]/g, "").split(":"))

                let object = {}
                arrayOfParams.forEach(param => {
                    object = {
                        ...object,
                        [param[0]]: param[1]
                    }
                })
                return object;
            };
            
            filter ? filter = getParamsAsObject(filter) : filter = null

            let orders = await Order.search(filter)
            let allOrdersLength = orders.length 
 
            return res.status(200).json({orders, allOrdersLength})
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }
}
