const db = require('../../config/db')
const Base = require('./Base')

module.exports = class Order extends Base {

    constructor() {
        super({ table: 'orders' })
    }

    async search({ filter }) {

        let query = `
            SELECT *
            FROM orders
            WHERE 1 = 1
            `

        // if (filter) {
        //     query += `
        //         OR orders.budgetist ilike '%${filter}%'
        //     `
        // }

        const results = await db.query(query)
        return results.rows
    }
}