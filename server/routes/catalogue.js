const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

router.get('/all/:sort', async (req, res, next) => {
  let sorter = '';
  let query = '';

  const shapeQuery = `SELECT DISTINCT on(s.shape_name)
  s.shape_name AS "name",
  s.id AS "shape_id",
  s.shape_cat AS "shape_cat",
  b.price AS "price",
  b.stock AS "stock",
  b.id AS "id"
  FROM brick AS b
  JOIN shape AS s ON b.fk_shape_id = s.id`;

  const otherQuery = `SELECT * FROM (
    SELECT DISTINCT on(s.shape_name)
      s.shape_name AS "name",
      s.id AS "shape_id",
      s.shape_cat AS "shape_cat",
      b.price AS "price",
      b.stock AS "stock",
      b.id AS "id"
      FROM brick AS b
      JOIN shape AS s ON b.fk_shape_id = s.id
  ORDER BY s.shape_name ASC
  ) AS "table"`;


  switch (req.params.sort) {
    case 'ABC' || undefined:
      query = shapeQuery;
      sorter = ' ORDER BY s.shape_name ASC;';
      break;
    case 'CBA':
      query = shapeQuery;
      sorter = ' ORDER BY s.shape_name DESC;';
      break;
    case 'PASC':
      query = otherQuery;
      sorter = ' ORDER BY price ASC;';
      break;
    case 'PDES':
      query = otherQuery;
      sorter = ' ORDER BY price DESC;';
      break;
    case 'CASC':
      query = otherQuery;
      sorter = ' ORDER BY shape_cat ASC;';
      break;
    case 'CDESC':
      query = otherQuery;
      sorter = ' ORDER BY shape_cat DESC;';
      break;
  }
  try {
    const result = await db.query(
    `${query}` + `${sorter}`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
