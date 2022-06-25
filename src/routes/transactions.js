const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

router.get('/all', transactionsController.all);
router.post('/create', transactionsController.create)

module.exports = router;