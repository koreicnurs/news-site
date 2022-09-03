const express = require('express');
const mySqlDb = require('../mySqlDb');

const router = express.Router();

router.get('/', async (req, res) => {
    const [comments] = await mySqlDb.getConnection().query('SELECT * from comments');
    const newsId = req.query.news_id;
    if(newsId) {
        console.log(newsId);
        const [comments] = await mySqlDb.getConnection().query('SELECT * FROM comments where news_id=newsId');
        console.log(comments);
    }
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

router.delete('/:id', async (req, res) => {
    await mySqlDb.getConnection().query(
        `DELETE FROM ?? WHERE id = ?`,
        ['comments', req.params.id]
    );
    res.send('Deleted');
});

module.exports = router;