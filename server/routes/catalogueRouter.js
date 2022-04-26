const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

router.get('/brick/all/:sort', async (req, res, next) => {
  let sorter = '';
  let query = '';

  const shapeQuery =
    `SELECT DISTINCT on(s.shape_name)
    b.id AS "id",
    s.shape_name AS "name",
    s.id AS "img_id",
    s.shape_cat AS "shape_cat",
    b.price AS "price",
    b.stock AS "stock",
    b.id AS "id"
    FROM brick AS b
    JOIN shape AS s ON b.fk_shape_id = s.id`;

  const otherQuery =
    `SELECT * FROM (
      SELECT DISTINCT on(s.shape_name)
        b.id AS "id",
        s.shape_name AS "name",
        s.id AS "img_id",
        s.shape_cat AS "shape_cat",
        b.price AS "price",
        b.stock AS "stock",
        b.id AS "id"
        FROM brick AS b
        JOIN shape AS s ON b.fk_shape_id = s.id
    ORDER BY s.shape_name ASC
    ) AS "table"`;

  switch (req.params.sort) {
    case 'ABC' || undefined || 'sort':
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

router.get('/kit/all/:sort', async (req, res, next) => {
  let sorter = '';
  const query = `SELECT
  k.id as "id",
  k.kit_name as "name",
  k.id as "img_id",
  k.kit_cat as "cat",
  k.kit_stock as "stock",
  k.kit_price as "price"
  FROM kit as k`;

  switch (req.params.sort) {
    case 'ABC' || undefined || 'sort':
      sorter = ' ORDER BY k.kit_name ASC;';
      break;
    case 'CBA':
      sorter = ' ORDER BY k.kit_name DESC;';
      break;
    case 'PASC':
      sorter = ' ORDER BY k.kit_price ASC;';
      break;
    case 'PDES':
      sorter = ' ORDER BY k.kit_price DESC;';
      break;
    case 'CASC':
      sorter = ' ORDER BY k.kit_cat ASC;';
      break;
    case 'CDESC':
      sorter = ' ORDER BY k.kit_cat DESC;';
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

router.get('/product/all/:sort', async (req, res, next) => {
  let sorter = '';
  let query = '';

  const shapeQuery =
    `(SELECT DISTINCT ON (s.shape_name)
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
    from kit as k)`;

  const otherQuery =
    `SELECT * FROM (
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

  switch (req.params.sort) {
    case 'ABC' || undefined || 'sort':
      query = shapeQuery;
      sorter = ' ORDER BY name ASC;';
      break;
    case 'CBA':
      query = shapeQuery;
      sorter = ' ORDER BY name DESC;';
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
      sorter = ' ORDER BY cat ASC;';
      break;
    case 'CDESC':
      query = otherQuery;
      sorter = ' ORDER BY cat DESC;';
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
