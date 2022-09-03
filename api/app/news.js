const express = require('express');

const multer = require('multer');
const path = require('path');
const config = require('../config');
const {nanoid} = require('nanoid');

const mySqlDb = require('../mySqlDb');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    },
});

const upload = multer({storage});

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

router.post('/', upload.single('image'),  async (req, res) => {
    if (!req.body.title || !req.body.description) {
        return res.status(400).send({error: 'Something are missing'});
    }

    const oneNews = {
        title: req.body.title,
        description: req.body.description,
    };

    if (req.file) {
        oneNews.image = req.file.filename;
    }

    const newOneNews = await mySqlDb.getConnection().query(
        'INSERT INTO ?? (title, description, image) VALUES (?, ?, ?)',
        ['news', oneNews.title, oneNews.description, oneNews.image]
    )

    res.send({
        ...oneNews,
        id: newOneNews.insertId,
    });
});

router.delete('/:id', async (req, res) => {
    await mySqlDb.getConnection().query(
        `DELETE FROM ?? WHERE id = ?`,
        ['news', req.params.id]
    );
    res.send('Deleted');
});

module.exports = router;