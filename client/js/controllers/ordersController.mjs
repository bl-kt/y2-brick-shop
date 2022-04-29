import * as auth from '../controllers/authController.mjs';

async function createOrder() {
  const currentUser = await auth.getAuth0User();
// currentUser.sub
  console.log('Update Stock');
}

function removeOrder() {
  console.log('Order removed');
}

export { createOrder, removeOrder };
