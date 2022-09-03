const express = require('express');
const mySqlDb = require('../mySqlDb');

const router = express.Router();

router.get('/', async (req, res) => {
    const [comments] = await mySqlDb.getConnection().query('SELECT * from comments');
    res.send(comments);
});

module.exports = router;