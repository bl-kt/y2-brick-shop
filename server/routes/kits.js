const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('kits');
});

router.get('kits/', getKits);
router.get('kit/:id', getKit);
router.get('kit/:id/stock', getKitInfo);

function getKits() {
  console.log("I'm just here for now.");
}

function getKit() {
  console.log("I'm just here for now.");
}

function getKitInfo() {
  console.log("I'm just here for now.");
}

module.exports = router;
