const faker = require('faker')

const OrderModel = require('./src/app/models/Order')

async function createOrders() {
    let Order = new OrderModel()
    const orders = await Order.findAll()

    while (orders.length <= 20) {
        orders.push({
            po: faker.datatype.number(99999).toString(),
            budgetist: faker.name.firstName(),
            weight: faker.datatype.number(5),
            ac: faker.datatype.number(99999).toString(),
            company: faker.company.companyName(),
            uf: faker.address.stateAbbr()
        })
    }

    const ordersPromise = orders.map(order => Order.create(order))

    ordersIds = await Promise.all(ordersPromise)
}

createOrders()