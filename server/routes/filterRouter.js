const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

// Bricks

router.get('/brick/colour/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM colour;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/brick/shape/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM shape as s;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/brick/category/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT DISTINCT s.shape_cat FROM shape as s;');
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
    const result = await db.query('SELECT DISTINCT k.kit_cat FROM kit as k;');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

module.exports = router;
