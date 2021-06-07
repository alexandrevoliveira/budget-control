const db = require('../../config/db')
const Base = require('./Base')

module.exports = class Order extends Base {

    constructor() {
        super({ table: 'orders' })
    }

    async search(filter) {

        let query = `
            SELECT *
            FROM ${this.table}
            WHERE 1 = 1
        `

        if (filter) {
            Object.keys(filter).map(field => {
                query += ` AND ${field} ilike '%${filter[field]}%'`
            })
        }

        query += ` ORDER BY id`
        
        const results = await db.query(query)
        return results.rows
    }
}