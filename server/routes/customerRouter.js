const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

router.post('/:sub', async (req, res, next) => {
  let sub = req.params.sub;
  try {
    const result = await db.query(`
    INSERT INTO customer (id) VALUES
    ($1);`, [sub]);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * from customer;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
