const express = require('express');
const router = express.Router();

const get = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API Desenvolvida para Teste Desenvolvedor na Smarkio",
        version: "0.0.1"
    });
});

module.exports = router;