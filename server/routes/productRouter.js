const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

// get all products
router.get('/:id', async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT * FROM (
        (SELECT
         b.id as "id",
         s.shape_name as "name",
         s.id as "img_id",
         s.shape_cat as "cat",
         c.colour_name as "colour",
         stock as "stock",
         price as "price"
         FROM brick as b
         JOIN shape as s on b.fk_shape_id = s.id
         JOIN colour AS c on b.fk_colour_id = c.id
        ) UNION (
         SELECT
         id as "id",
         kit_name as "name",
         id as "img_id",
         kit_cat as "cat",
         kit_name as "colour",
         kit_stock as "stock",
         kit_price as "price"
         from kit)
        ) as "table"
        WHERE id = ${req.params.id};`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/:shape/:colour', async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT * FROM (
        (SELECT
         b.id as "id",
         s.shape_name as "name",
         s.id as "img_id",
         s.shape_cat as "cat",
         c.colour_name as "colour",
         stock as "stock",
         price as "price"
         FROM brick as b
         JOIN shape as s on b.fk_shape_id = s.id
         JOIN colour AS c on b.fk_colour_id = c.id
        ) UNION (
         SELECT
         id as "id",
         kit_name as "name",
         id as "img_id",
         kit_cat as "cat",
         kit_name as "colour",
         kit_stock as "stock",
         kit_price as "price"
         from kit)
        ) as "table"
        WHERE name ILIKE '%${req.params.shape}%' AND colour = '${req.params.colour}';`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.put('/:id/:table/:amount', async (req, res, next) => {
  try {
    const result = await db.query(`UPDATE ${req.params.table}
    SET stock = ${req.params.amount}
    WHERE id = ${req.params.id}`);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
