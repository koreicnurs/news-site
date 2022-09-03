const express = require('express');
const cors = require('cors');
const mySqlDb = require('./mySqlDb');

const news = require('./app/news');
const comments = require('./app/comments');

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/news', news);
app.use('/comments', comments);

mySqlDb.connect();
app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});