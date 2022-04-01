// Basket Manipulation

const BASKET = [];
const localStorage = window.localStorage;

// FUNCTION: Add [quantity] of [item] to the basket
// overwrites current content
function add(item, quantity) {
  // if id doesn't exist:
  BASKET.push({
    product: item,
    quantity: quantity,
  });

  localStorage.setItem('Basket', (JSON.stringify(BASKET)));
  console.log(`Added x${quantity} ${JSON.stringify(item)} to basket!`);
}

// FUNCTION: Remove [item] from basket
// currently removes all items with id,  not just selected
function remove(item) {
  const currentBasket = (JSON.parse(localStorage.getItem('Basket')));
  const newBasket = currentBasket.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Basket', (JSON.stringify(newBasket)));
  console.log(`Remove ${item} from Basket!`);
  location.reload();
}


// FUNCTION: Clear local storage basket object
function clear() {
  const emptyBasket = [];
  localStorage.setItem('Basket', emptyBasket);
}

export { add, remove, clear };
