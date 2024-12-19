const router = require("express").Router();

const connection = require("../database/connection");

router.get("/books", async (req, res) => {
  const books = await connection.execute("SELECT * FROM books");

  console.log(books);

  res.json({ books });
});

router.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  const book = await connection.execute(`SELECT * FROM books WHERE id = ${id}`);

  res.json({ book });
});

router.post("/books", async (req, res) => {
  const { title, description } = req.body;

  await connection.execute(
    `INSERT INTO "books" (title, description) VALUES ('${title}', '${description}')`
  );

  res.json({ message: "Book has been created" });
});

router.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await connection.execute(
    `UPDATE "books" SET title = '${title}', description = '${description}' WHERE id = ${id}`
  );

  res.json({ message: `Book with id ${id} has been updated` });
});

module.exports = router;
