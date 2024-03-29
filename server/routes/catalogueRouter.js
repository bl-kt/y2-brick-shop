const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

router.get('/:category/all/', async (req, res, next) => {
  let sort = '';
  let query = '';
  let filter;

  if (req.query.searchCat === 'name') {
    filter = ` AND ${req.query.searchCat} ILIKE '%${req.query.search}%' `;
  } else {
    filter = ` AND lower(${req.query.searchCat}) = lower('${req.query.search}') `;
  }

  if (req.params.category === 'kit' && req.query.searchCat === 'name') {
    filter = ` WHERE ${req.query.searchCat} ILIKE '%${req.query.search}%'`;
  }

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
    query = `SELECT * FROM ( SELECT
      b.id AS "id",
      s.shape_name AS "name",
      s.id AS "img_id",
      s.shape_cat AS "cat",
      c.colour_name as "colour",
      b.price AS "price",
      b.stock AS "stock"
      FROM brick AS b
      JOIN shape AS s ON b.fk_shape_id = s.id
      JOIN colour AS c on b.fk_colour_id = c.id ) as "table"
      where colour = 'White'`;
  }

  if (req.params.category === 'product') {
    query = `SELECT * FROM (
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
      ) as "table"`;

    if (req.query.searchCat === 'name') {
      filter = ` WHERE ${req.query.searchCat} ILIKE '%${req.query.search}%' `;
    } else {
      filter = ` WHERE lower(${req.query.searchCat}) = lower('${req.query.search}') `;
    }
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
