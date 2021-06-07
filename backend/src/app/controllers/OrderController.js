const OrderClass = require('../models/Order')

let Order = new OrderClass()

module.exports = {
    async index(req, res) {
        try {
            let { filter } = req.query

            const getParamsAsObject = (query) => {
                query = query.replace(/[{}\s]/g, "").split(",")

                const array2 = query.map(filter => filter.replace(/["\s]/g, "").split(":"))

                let object = {}
                array2.forEach(element => {
                    object = {
                        ...object,
                        [element[0]]: element[1]
                    }
                })

                return object;
            };
            
            filter ? filter = getParamsAsObject(filter) : filter = null 
            console.log(filter)

            let orders = await Order.search({filter})
            let allOrdersLength = orders.length 
 
            return res.status(200).json({orders, allOrdersLength})
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }
}
