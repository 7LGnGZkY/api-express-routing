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

app.get("/users", (req, res) => {
  res.json({ users: data.users });
});

app.get("/users/:id", (req, res) => {
  let user = data.users.find((user) => user.id === userId);
  let id = parseInt(req.params.id);
  res.send({ users: user });
});

app.post("/users", (req, res) => {
  const newUser = {
    id: data.users.length + 1,
    email: req.body.email,
  };
  data.users.push(newUser);
  res.json({ user: newUser });
});

app.get("/books", (req, res) => {
  res.json({ books: data.books });
});

app.get("/books/:id", (req, res) => {
  res.json({
    book: data.books.find((book) => book.id === parseInt(req.params.id)),
  });
});

app.post("/books", (req, res) => {
  const book = {
    id: data.books.length + 1,
    title: req.body.title,
    type: req.body.type,
    author: req.body.author,
  };
  data.books.push(book);
  res.json({ book: book });
});

app.get("/films", (req, res) => {
  let filmDirector = req.query.filmDirector;
  if (filmDirector === true) {
    res.json(films.filter((film) => film.director === director));
  } else {
    res.json({ film: films });
  }
});

app.get("/films/:id", (req, res) => {
  res.json({
    film: data.films.find((film) => film.id === parseInt(req.params.id)),
  });
});

app.post("/films", (req, res) => {
  const newFilm = {
    id: data.films.length + 1,
    title: req.body.title,
    director: req.body.director,
  };
  data.films.push(newFilm);
  res.json({ film: newFilm });
});
