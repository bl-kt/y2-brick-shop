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
const filter = require('./routes/filterRouter.js');
const auth = require('./routes/authRouter.js');

// Methods

app.use(express.static('../client'));
app.use(express.json());

app.use('/api/order', order);
app.use('/api/customer', customer);
app.use('/api/product', product);
app.use('/api/catalogue', catalogue);
app.use('/api/filter', filter);
app.use('/api/auth', auth);

// Listeners
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
