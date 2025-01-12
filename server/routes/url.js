const express = require('express');
const { handleGenerateNewShortURL } = require('../controllers/url'); // Correctly import from controllers

const router = express.Router();

router.post('/', handleGenerateNewShortURL); // Use the imported function as a callback for the POST route

module.exports = router;
