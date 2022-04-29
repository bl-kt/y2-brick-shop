const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

router.get('/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM customer;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.post('/:sub', async (req, res, next) => {
  const sub = req.params.sub;
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


router.get('/:id', async (req, res, next) => {
  try {
    const result = await db.query(`SELECT * from customer WHERE id ILIKE '%${req.params.id}%';`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
