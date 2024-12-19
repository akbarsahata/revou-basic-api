const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/books", (req, res) => {
  res.statusCode = 200;
  res.json({
    books: [
      {
        id: 1,
        title: "Harry Potter",
        description:
          "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
      },
      {
        id: 2,
        title: "The Lord of the Rings",
        description:
          "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      },
    ],
  });
});

router.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.statusCode = 200;
  res.json({
    book: {
      id: parseInt(id),
      title: "Harry Potter",
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
    },
  });
});

router.post("/books", (req, res) => {
  res.statusCode = 201;
  res.json({
    message: "Book has been created",
  });
});

router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  res.statusCode = 200;
  res.json({
    message: `Book with id ${id} has been updated`,
  });
});

router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  res.statusCode = 200;
  res.json({
    message: `Book with id ${id} has been deleted`,
  });
});

module.exports = router;
