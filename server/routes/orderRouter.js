const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

router.get('/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM orders;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.post('/post', async (req, res, next) => {
  try {
    const result = await db.query(`INSERT INTO orders (customer_id, basket, date_placed, fulfilled) VALUES
    ('${req.body.customerID}', '{ "Basket": ${JSON.stringify(req.body.basket)} }', ${req.body.datePlaced}, ${req.body.fulfilled});`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await db.query(`SELECT * from orders WHERE id ILIKE '%${req.params.id}%';`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});


module.exports = router;
