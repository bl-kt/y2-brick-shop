const express = require('express');
const router = express.Router();

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
