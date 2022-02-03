const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('orders');
});


router.get('orders/', getOrders);
router.get('orders/:id', getOrder);
router.get('orders/:id/kits', getOrderInfo);
router.get('orders/:id/bricks', getOrderInfo);

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
