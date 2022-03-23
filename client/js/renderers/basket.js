import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';

const localStorage = window.localStorage;
const content = document.querySelector('#basketContents');

document.addEventListener('DOMContentLoaded', renderBasket);

function renderBasket() {
  const basketContent = JSON.parse(localStorage.getItem('Basket'));
  for (let i = 0; i < basketContent.length; i++) {
    renderItem(basketContent, i);
  }
}

function renderItem(basketContent, i) {
  // take data[i]
  // decant into <tr>
  console.log(basketContent[i]);
}
