const express = require('express');
const router = express.Router();

router.get('product/', getProduct);

router.get('/:id', getProduct);

function getProduct() {
  console.log('Product');
}

function getProduct() {
  console.log('Product');
}

module.exports = router;
