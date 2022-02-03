const express = require('express');
const app = express();
// const path = require('path');

// Routers

const bricks = require('./routes/bricks.js');
const customers = require('./routes/customers.js');
const kits = require('./routes/kits.js');
const orders = require('./routes/orders.js');

const port = process.env.PORT || 8080;

// Methods

app.use(express.static('../client'));

app.use('/orders', orders);
app.use('/customers', customers);
app.use('/bricks', bricks);
app.use('/kits', kits);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
