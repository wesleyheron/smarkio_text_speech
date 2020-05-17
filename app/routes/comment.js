
const express = require('express');
const router = express.Router();
const api = require('../controllers/comment');


router.get('/', api.get);
router.post('/', api.post);

module.exports = router;