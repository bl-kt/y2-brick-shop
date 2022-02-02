const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

app.use(express.static('src'));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

app.get(`orders/`, getOrders);

app.get(`orders/:id`, getOrder);

app.get(`orders/:id/kits`, getOrdersKit);

app.get (`orders/:id/bricks`, getOrdersBrick);


app.get(`customers/`, getCustomers);

app.get(`customer/:id`, getCustomer);

app.get(`customer/:id/orders`, getCustomersOrders);

app.get(`customer/:id/wishlist`, getWishlist);


app.get(`bricks/`, getBricks);

app.get(`bricks/:id`, getBrickById);

app.get(`bricks/:id/stock`, getBrickStock);


app.get(`kits/`, getKits);

app.get(`kit/:id`, getKitById);

app.get(`kit/:id/stock`, getKitStock);
