require("dotenv").config();

const express = require("express");
const { generateJwt, validateJwt } = require("./util");

const app = express();

app.use(express.json());

app.use("/example-1", require("./routes/books"));

app.use("/example-2", require("./routes/books-raw-sql"));

app.use("/example-3", require("./routes/books-orm"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    res.json({
      token: generateJwt({
        username: "admin",
        role: "admin",
      }),
    });
  } else {
    res.status(401).json({ message: "Login failed" });
  }
});

const checkJwt = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const data = validateJwt(token);

  if (!data) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = data;

  next();
}

app.use("/example-4", checkJwt, require("./routes/books"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
