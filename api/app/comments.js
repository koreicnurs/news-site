const express = require('express');
const mySqlDb = require('../mySqlDb');

const router = express.Router();

router.get('/', async (req, res) => {
    const [comments] = await mySqlDb.getConnection().query('SELECT * from comments');
    res.send(comments);
});

router.post('/',  async (req, res) => {
    if (!req.body.message || !req.body.news_id) {
        return res.status(400).send({error: 'Something are missing'});
    }

    const comment = {
        author: req.body.author,
        message: req.body.message,
        news_id: req.body.news_id
    };

    const newComment = await mySqlDb.getConnection().query(
        'INSERT INTO ?? (author, message, news_id) VALUES (?, ?, ?)',
        ['comments', comment.author, comment.message, comment.news_id]
    )

    res.send({
        ...comment,
        id: newComment.insertId,
    });
});

module.exports = router;