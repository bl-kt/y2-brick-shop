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

module.exports = router;
