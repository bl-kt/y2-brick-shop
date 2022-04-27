const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

// Bricks

router.get('/brick/colour/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT c.colour_name as "value" FROM colour as c;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/brick/shape/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT s.shape_name as "value" FROM shape as s;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/brick/category/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT DISTINCT s.shape_cat as "value" FROM shape as s;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

// Kits

router.get('/kit/category/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT DISTINCT k.kit_cat as "value" FROM kit as k;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
