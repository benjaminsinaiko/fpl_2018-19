const express = require('express');
const router = new express.Router();

router.get('/test', (req, res) => res.json({ msg: 'Leagues works' }));

module.exports = router;
