const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

// get all products
router.get('/:id', async (req, res, next) => {
  try {
    const result = await db.query();
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
