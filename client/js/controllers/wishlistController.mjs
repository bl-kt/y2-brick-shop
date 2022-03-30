// Wishlist Manipulation

const WISHLIST = [];
const localStorage = window.localStorage;


// FUNCTION: Add [item] to local storage Wishlist object
function add(item) {
  WISHLIST.push({
    product: item,
  });

  localStorage.setItem('Wishlist', (JSON.stringify(WISHLIST)));
  console.log(`Added ${JSON.stringify(item)} to wishlist!`);
}

// FUNCTION: Remove [item] from local storage Wishlist object
// currently removes all items with id,  not just selected
function remove(item) {
  const currentWishlist = (JSON.parse(localStorage.getItem('Wishlist')));
  const newWishlist = currentWishlist.filter(comparison => comparison.product.id !== item.product.id);
  localStorage.setItem('Wishlist', (JSON.stringify(newWishlist)));
  console.log(`Remove ${item} from wishlist!`);
  location.reload();
}

// FUNCTION: Clear local storage wishlist object
function clear() {
  const emptyWishlist = [];
  localStorage.setItem('Wishlist', emptyWishlist);
}

export { add, remove, clear };
