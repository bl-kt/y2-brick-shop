const db = require('../../database/db.js');
const express = require('express');
const router = express.Router();

// get all products
router.get('/all', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM brick');
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

router.get('/cat', async (req, res, next) => {
  try {
    const result = await db.query(`SELECT DISTINCT on(s.shape_name)
    s.shape_name AS "name",
    s.id AS "shape_id",
    b.price AS "price",
    b.stock AS "stock",
    b.id AS "id"
    FROM brick AS b
    JOIN shape AS s ON b.fk_shape_id = s.id;`);
    res.send(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
  next();
});

// get product by id
// router.get('/:id', async (req, res, next) => {
//   try {
//     const qRes = await db.query(`SELECT * FROM brick where id ='${req.params.id}'`);
//     res.redirect('/product.html?id=' + req.params.id);
//     console.log(qRes.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send();
//   }
//   next();
// });

// get stock of product by id
router.get('/:id/stock');


module.exports = router;
