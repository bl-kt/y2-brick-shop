const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

// get all products
router.get('/brick/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM brick');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/kit/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM kit');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/all', async (req, res, next) => {
  try {
    const result = await db.query(`(
      SELECT DISTINCT ON (s.shape_name)
       b.id as "id",
       s.shape_name as "name",
       s.shape_cat as "cat",
       stock as "stock",
       price as "price"
       FROM brick as b
      JOIN shape as s on b.fk_shape_id = s.id
      ) UNION (
      SELECT
      id as "id",
      kit_name as "name",
      kit_cat as "cat",
      kit_stock as "stock",
      kit_price as "price"
      from kit
      );`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
