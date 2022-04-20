const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");
const morgan = require("morgan");
const data = require("./data");

// SETUP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

const books = require('./routes/books')
const films = require('./routes/films')

app.use("/books", books)
app.use("/films", films)
