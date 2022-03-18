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
function remove() {
  console.log('Removed from Wishlist');
}

// Retrieve contents of local storage
function get() {
  console.log('Retrieved Wishlist');
}

// Clear local storage Wishlist object
function clear() {
  console.log('Cleared to Wishlist');
}

export { add, remove, get, clear };
