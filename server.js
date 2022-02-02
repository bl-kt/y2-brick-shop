const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

app.use(express.static('src'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

// Order

app.get('orders/', getOrders);
app.get('orders/:id', getOrder(id));
app.get('orders/:id/kits', getOrderInfo(id, kitID));
app.get('orders/:id/bricks', getOrdersInfo(id, brickID));

function getOrders(req, res) {
  console.log("I'm just here for now.");
}

function getOrder(id, req, res) {
  console.log("I'm just here for now.");
}

function getOrderInfo(id, searchTerm, req, res) {
  console.log("I'm just here for now.");
}

// Customer

app.get('customers/', getCustomers);
app.get('customer/:id', getCustomer(id));
app.get('customer/:id/orders', getCustomerInfo(id, orders));
app.get('customer/:id/wishlist', getCustomerInfo(id, wishlist));

function getCustomers(req, res) {
  console.log("I'm just here for now.");
}

function getCustomer(id, req, res) {
  console.log("I'm just here for now.");
}

function getCustomerInfo(id, searchTerm, req, res) {
  console.log("I'm just here for now.");
}

// Bricks

app.get('bricks/', getBricks);
app.get('bricks/:id', getBrick(id));
app.get('bricks/:id/stock', getBrickInfo(id, stock));

function getBricks(req, res) {
  console.log("I'm just here for now.");
}

function getBrick(id, req, res) {
  console.log("I'm just here for now.");
}

function getBrickInfo(id, searchTerm, req, res) {
  console.log("I'm just here for now.");
}

// Kits

app.get('kits/', getKits);
app.get('kit/:id', getKit(id));
app.get('kit/:id/stock', getKitInfo(id, stock));

function getKits(req, res) {
  console.log("I'm just here for now.");
}

function getKit(id, req, res) {
  console.log("I'm just here for now.");
}

function getKitInfo(id, searchTerm, req, res) {
  console.log("I'm just here for now.");
}
