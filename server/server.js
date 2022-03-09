const express = require('express');
const app = express();
// const path = require('path');

// Routers

const order = require('./routes/order.js');
const customer = require('./routes/customer.js');
const product = require('./routes/product.js');
const port = process.env.PORT || 8080;

// Methods

app.use(express.static('../client'));

app.use('/order', order);
app.use('/customer', customer);
app.use('/product', product);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
