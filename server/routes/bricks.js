const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('bricks');
});

router.get('bricks/', getBricks);
router.get('bricks/:id', getBrick);
router.get('bricks/:id/stock', getBrickInfo);

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
