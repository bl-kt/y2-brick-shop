// Basket Manipulation

const BASKET = [];
const localStorage = window.localStorage;

// Add to local storage basket object
function add(item, quantity) {
  BASKET.push({
    product: item,
    quantity: 1,
  });

  localStorage.setItem('Basket', (JSON.stringify(BASKET)));
  console.log(`Added x${quantity} ${JSON.stringify(item)} to basket!`);
}

// Remove from local storage basket object
function remove(item) {
  const currentBasket = (JSON.parse(localStorage.getItem('Basket')));
  const newBasket = currentBasket.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Basket', (JSON.stringify(newBasket)));
  console.log(`Remove ${item} from Basket!`);
  location.reload();
  // currently removes all items with id,  not just selected
}
// Retrieve contents of local storage
function get() {
  console.log('Retrieved basket');
}

// Clear local storage basket object
function clear() {
  console.log('Cleared basket');
}

export { add, remove, get, clear };
