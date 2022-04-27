const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

router.get('/:category/all/', async (req, res, next) => {
  let sort = '';
  let query = '';
  const filter = ` WHERE lower(${req.query.searchCat}) = lower('${req.query.search}')`;

  if (req.params.category === 'kit') {
    query = `SELECT * FROM (SELECT
    k.id as "id",
    k.kit_name as "name",
    k.id as "img_id",
    k.kit_cat as "cat",
    k.kit_stock as "stock",
    k.kit_price as "price"
    FROM kit as k) AS "table"`;
  }
  if (req.params.category === 'brick') {
    query = `SELECT * FROM (
      SELECT DISTINCT on(s.shape_name)
        b.id AS "id",
        s.shape_name AS "name",
        s.id AS "img_id",
        s.shape_cat AS "cat",
        b.price AS "price",
        b.stock AS "stock",
        b.id AS "id"
        FROM brick AS b
        JOIN shape AS s ON b.fk_shape_id = s.id
    ORDER BY s.shape_name ASC
    ) AS "table"`;
  }
  if (req.params.category === 'product') {
    query = `SELECT * FROM (
      (SELECT DISTINCT ON (s.shape_name)
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
        from kit as k)) as "table"`;
  }

  switch (req.query.sort) {
    case 'ABC' || undefined || 'sort':
      sort = ' ORDER BY name ASC;';
      break;
    case 'CBA':
      sort = ' ORDER BY name DESC;';
      break;
    case 'PASC':
      sort = ' ORDER BY price ASC;';
      break;
    case 'PDES':
      sort = ' ORDER BY price DESC;';
      break;
    case 'CASC':
      sort = ' ORDER BY cat ASC;';
      break;
    case 'CDESC':
      sort = ' ORDER BY cat DESC;';
      break;
  }

  if (!req.query.search) {
    console.log("ran w/o query");
    try {
      const result = await db.query(
      `${query}` + `${sort}`);
      res.send(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
    next();
  } else {
    console.log("ran w/ query");
    try {
      const result = await db.query(
      `${query}` + `${filter}` + `${sort}`);
      res.send(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
    next();
  }
});

module.exports = router;
