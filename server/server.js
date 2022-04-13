const express = require('express');
const app = express();
const port = 8080;

// // DB
// function initDB() {
//   const { Client } = require('pg');
//   const db = new Client({
//     host: 'localhost',
//     user: 'brickshop_superuser',
//     password: 'strongerPassword',
//     port: 5432,
//     database: 'brickshop',
//   });
//   return db;
// }

// const db = initDB();
// db.connect();


// Routers
const order = require('./routes/order.js');
const customer = require('./routes/customer.js');
const product = require('./routes/product.js');

// Methods

app.use(express.static('../client'));

app.use('api/order', order);
app.use('api/customer', customer);
app.use('api/product', product);

// Listeners
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
