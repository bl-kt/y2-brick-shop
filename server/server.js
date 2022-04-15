const express = require('express');
const db = require('../database/db.js');
const app = express();
const port = 8080;

db.startDB();

// Routers
const order = require('./routes/order.js');
const customer = require('./routes/customer.js');
const product = require('./routes/product.js');

// Methods

app.use(express.static('../client'));

app.use('/api/order', order);
app.use('/api/customer', customer);
app.use('/api/product', product);

// Listeners
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
