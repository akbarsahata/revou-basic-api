const express = require("express");

const app = express();

app.use(express.json());

app.use("/example-1", require("./routes/books"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
