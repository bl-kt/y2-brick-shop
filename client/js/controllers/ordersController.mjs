import * as auth from '../controllers/authController.mjs';

async function createOrder(basketContent) {
  console.log(basketContent);
  let response;
  try {
    const currentUser = await auth.getAuth0User();
    const url = new URL('/api/order/post', document.location.origin);

    const body = {
      customerID: currentUser.sub,
      basket: basketContent,
      datePlaced: Date.now(),
      fulfilled: false,
    };

    console.log(url);
    response = await fetch(url.href, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

function removeOrder() {
  console.log('Order removed');
}

export { createOrder, removeOrder };
