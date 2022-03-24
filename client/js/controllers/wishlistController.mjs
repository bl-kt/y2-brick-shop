// Wishlist Manipulation

const WISHLIST = [];
const localStorage = window.localStorage;


// Add to local storage Wishlist object
function add(item) {
  WISHLIST.push({
    product: item,
  });

  localStorage.setItem('Wishlist', (JSON.stringify(WISHLIST)));
  console.log(`Added ${JSON.stringify(item)} to wishlist!`);
}

// Remove from local storage Wishlist object
function remove(item) {
  const currentWishlist = (JSON.parse(localStorage.getItem('Wishlist')));
  const newWishlist = currentWishlist.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Wishlist', (JSON.stringify(newWishlist)));
  console.log(`Remove ${item} from wishlist!`);
  location.reload();
  // currently removes all items with id,  not just selected
}

// Retrieve contents of local storage
function get() {
  console.log('Retrieved Wishlist');
}

// Clear local storage Wishlist object
function clear() {
  console.log('Cleared Wishlist');
}

export { add, remove, get, clear };
