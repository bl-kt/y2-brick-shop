const express = require('express');
const router = express.Router();

router.get('/all', getOrders);

router.get('/id', getOrder);
router.get('/id/kits', getOrderInfo);
router.get('/id/bricks', getOrderInfo);

function getOrders() {
  console.log("I'm just here for now.");
}

function getOrder() {
  console.log("I'm just here for now.");
}

function getOrderInfo() {
  console.log("I'm just here for now.");
}

module.exports = router;
