const authConfig = require('../auth-config.js');

const express = require('express');
const router = express.Router();

router.get('/config', (req, res) => {
  res.json(authConfig);
});

module.exports = router;
