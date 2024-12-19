const { text } = require("drizzle-orm/pg-core");
const { integer } = require("drizzle-orm/pg-core");
const { pgTable } = require("drizzle-orm/pg-core");

const bookSchema = pgTable("books", {
  id: integer().primaryKey(),
  title: text(),
  description: text(),
});

module.exports = bookSchema;
