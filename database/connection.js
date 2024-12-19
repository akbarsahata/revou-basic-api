const { drizzle } = require("drizzle-orm/postgres-js")
const bookSchema = require('./models/book')

const connection = drizzle(process.env.DATABASE_URL, {
    schema: {
        bookSchema,
    }
})

module.exports = connection