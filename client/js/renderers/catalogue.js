import data from '../../../data/products.js';
import * as wishlist from '../controllers/wishlistController.mjs';
import * as basket from '../controllers/basketController.mjs';

const content = document.querySelector('#grid');

document.addEventListener('DOMContentLoaded', renderCatalogue);

// Renders Catalogue
function renderCatalogue() {
  for (let i = 0; i < data.bricks.length; i++) {
    createItem(i);
  }
}

// Renders individual items to append to catalogue
function createItem(i) {
  const wrapper = document.createElement('div');
  wrapper.id = (`item${data.bricks[i].id}`);
  wrapper.classList.add('item');
  content.appendChild(wrapper);

  const itemContent = document.createElement('div');
  itemContent.classList.add('itemContent');
  wrapper.appendChild(itemContent);

  const itemImg = document.createElement('img');
  itemImg.classList.add('itemImg');
  itemContent.appendChild(itemImg);

  const itemName = document.createElement('a');
  itemName.textContent = `${data.bricks[i].name}`;
  itemName.href = (`/products/${data.bricks[i].id}`);
  itemName.classList.add('itemName');
  itemContent.appendChild(itemName);

  const itemPrice = document.createElement('p');
  itemPrice.textContent = `£ ${data.bricks[i].price}`;
  itemPrice.classList.add('itemPrice');
  itemContent.appendChild(itemPrice);

  const wishlistBtn = document.createElement('a');
  wishlistBtn.value = `${data.bricks[i].id}`;
  wishlistBtn.classList.add('wishlistBtn');
  itemContent.appendChild(wishlistBtn);

  const heartIcon = document.createElement('img');
  heartIcon.src = '/client/content/icons/heart.svg';
  wishlistBtn.appendChild(heartIcon);

  wishlistBtn.addEventListener('click', () => {
    wishlist.add(data.bricks[i]);
  });

  const basketBtn = document.createElement('button');
  basketBtn.classList.add('basketBtn');
  basketBtn.textContent = '+ Basket';
  itemContent.appendChild(basketBtn);

  basketBtn.addEventListener('click', () => {
    basket.add(data.bricks[i], 1);
  });
}
