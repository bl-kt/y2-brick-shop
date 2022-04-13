const express = require('express');
const router = express.Router();

router.get('all/', getCustomers);

router.get('/:id', getCustomer);
router.get('/:id/orders', getCustomerInfo);
router.get('/:id/wishlist', getCustomerInfo);

function getCustomers() {
  console.log("I'm just here for now.");
}

function getCustomer() {
  console.log("I'm just here for now.");
}

function getCustomerInfo() {
  console.log("I'm just here for now.");
}

module.exports = router;
