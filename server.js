const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { init } = require('./dbconnect');
const BookModel = require('./models/book');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/books', async (req, res) => {
    const book = req.body;
    const newBook = await BookModel.create(book);
    res.status(201).send(newBook);
});

app.get('/books', async (req, res) => {
    const books = await BookModel.find();
    res.status(200).send(books);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    init();
});