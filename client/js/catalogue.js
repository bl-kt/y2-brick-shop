import data from '../../data/products.js'

const grid = document.querySelector('#grid');

for (let i = 0; i < data.bricks.length; i++){
    createItem(i);
}

function createItem(i){
    const wrapper = document.createElement('div');
    wrapper.id = (`item${data.bricks[i].id}`);
    wrapper.classList.add('item');
    grid.appendChild(wrapper);

    const itemContent = document.createElement('div');
    itemContent.classList.add('itemContent');
    wrapper.appendChild(itemContent);

    const itemImg = document.createElement('img');
    itemImg.classList.add('itemImg');
    itemContent.appendChild(itemImg);

    const itemName = document.createElement('a');
    itemName.textContent = `${data.bricks[i].name}`
    itemName.href = (`/products/${data.bricks[i].id}`);
    itemName.classList.add('itemName');
    itemContent.appendChild(itemName);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `${data.bricks[i].price}`
    itemPrice.classList.add('itemPrice');
    itemContent.appendChild(itemPrice);

    const wishlistBtn = document.createElement('button');
    wishlistBtn.value = `${data.bricks[i].id}`;
    wishlistBtn.classList.add('wishlistBtn');
    itemContent.appendChild(wishlistBtn);
    wishlistBtn.addEventListener('click', addToWishlist);

    const basketBtn = document.createElement('button');
    basketBtn.classList.add('basketBtn');
    itemContent.appendChild(basketBtn);
    basketBtn.addEventListener('click', addToBasket);
}

function addToWishlist() {
    console.log('Add to Wishlist');
}

function addToBasket() {
    // not working - retrieve value of button for id of brick to be added.
    console.log(`Add ${this.value} to basket`);
}