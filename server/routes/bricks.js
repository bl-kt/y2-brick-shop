const express = require('express');
const router = express.Router();

router.get('bricks/', getBricks);

router.get('/:id', getBrick);
router.get('/:id/stock', getBrickInfo);

function getBricks() {
  console.log('Brick');
}

function getBrick() {
  console.log('Brick');
}

function getBrickInfo() {
  console.log('Brick');
}

module.exports = router;