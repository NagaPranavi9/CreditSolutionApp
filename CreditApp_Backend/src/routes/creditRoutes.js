const express = require('express');
const { resolveIssue } = require('../controllers/creditController');

const router = express.Router();

router.post('/resolve', resolveIssue);

module.exports = router;