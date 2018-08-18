const express = require('express');
const router = new express.Router();

// @route GET api/results/test
// @desc Tests results route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Results works' }));

module.exports = router;
