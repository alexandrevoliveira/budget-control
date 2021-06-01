const db = require('../../config/db')
const Base = require('./Base')

module.exports = class Order extends Base {

    constructor() {
        super({ table: 'orders' })
    }

    async search() {

        let query = `
            SELECT *
            FROM orders
            ORDER BY id
        `

        const results = await db.query(query)
        return results.rows
    }
}