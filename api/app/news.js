const express = require('express');
const mySqlDb = require('../mySqlDb');

const router = express.Router();

router.get('/', async (req, res) => {
    const [news] = await mySqlDb.getConnection().query('SELECT * from news');
    res.send(news);
});

router.get('/:id', async (req, res) => {
    const [one_news] = await mySqlDb.getConnection().query(
        `SELECT * FROM ?? WHERE id = ?`,
        ['news', req.params.id]
    );
    res.send(one_news[0]);
});


module.exports = router;