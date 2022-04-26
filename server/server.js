const express = require('express');
const db = require('../database/db.js');
const app = express();
const port = 8080;

db.startDB();

// Routers
const order = require('./routes/orderRouter.js');
const customer = require('./routes/customerRouter.js');
const product = require('./routes/productRouter.js');
const catalogue = require('./routes/catalogueRouter.js');

// Methods

app.use(express.static('../client'));

app.use('/api/order', order);
app.use('/api/customer', customer);
app.use('/api/product', product);
app.use('/api/catalogue', catalogue);

// Listeners
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
