const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Customers');
});

router.get('customers/', getCustomers);
router.get('customer/:id', getCustomer);
router.get('customer/:id/orders', getCustomerInfo);
router.get('customer/:id/wishlist', getCustomerInfo);

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
