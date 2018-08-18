const express = require('express');
const router = new express.Router();

router.get('/test', (req, res) => res.json({ msg: 'Players works' }));

module.exports = router;
