const db = require('../../config/db')
const Base = require('./Base')

module.exports = class Order extends Base {

    constructor() {
        super({ table: 'orders' })
    }

    async search({ filter }) {

        let query = `
            SELECT *
            FROM ${this.table}
            WHERE 1 = 1
        `

        if (filter) {
            query += ` 
                AND orders.budgetist ilike '%${filter}%'
            `
        }

        query += ` ORDER BY orders.id`
        
        const results = await db.query(query)
        return results.rows
    }
}