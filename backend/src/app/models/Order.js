const db = require('../../config/db')
const Base = require('./Base')

module.exports = class Order extends Base {

    constructor() {
        super({ table: 'orders' })
    }

    async search(limit, offset) {

        let query = `
            SELECT *
            FROM orders
            LIMIT ${limit} OFFSET ${offset}
        `

        const results = await db.query(query)
        return results.rows
    }
}