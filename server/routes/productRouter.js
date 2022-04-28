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
         stock as "stock",
         price as "price"
         FROM brick as b
         JOIN shape as s on b.fk_shape_id = s.id
        ) UNION (
         SELECT
         k.id as "id",
         k.kit_name as "name",
         k.id as "img_id",
         k.kit_cat as "cat",
         k.kit_stock as "stock",
         k.kit_price as "price"
         from kit as k)) as "table"
        WHERE id = ${req.params.id};`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/:id/:colour', async (req, res, next) => {
  try {
    const result = await db.query(
      `SELECT * FROM (
        (SELECT DISTINCT ON (s.shape_name)
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
  WHERE c.colour_name = 'White'
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
        WHERE id = ${req.params.id} AND colour = ${req.params.colour};`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
