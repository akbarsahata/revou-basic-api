const router = require("express").Router();

const { eq } = require('drizzle-orm');
const connection = require("../database/connection");
const booksTable = require('../database/models/book');

router.get("/books", async (req, res) => {
  const books = await connection.select().from(booksTable);

  console.log(books);

  res.json({ books });
});

router.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  const book = await connection.select().from(booksTable).where(eq(booksTable.id, id));

  res.json({ book });
});

router.post("/books", async (req, res) => {
  const { title, description } = req.body;

  await connection.insert(booksTable).values({ title, description });

  res.json({ message: "Book has been created" });
});

router.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await connection.update(booksTable).set({ title, description }).where(eq(booksTable.id, id));

  res.json({ message: `Book with id ${id} has been updated` });
});

module.exports = router;
