const express = require('express');
const router = express.Router();

// bricks

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

// kits

router.get('/', getKits);

router.get('/id', getKits);
router.get('/id/stock', getKitInfo);

function getKits(req, res) {
  console.log("I'm just here for now.");
  res.send('It worked uwu');
}

function getKitInfo(req, res) {
  console.log("I'm just here for now.");
  res.send('Multipath boy');
}

module.exports = router;
