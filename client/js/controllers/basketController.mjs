// Basket Manipulation

// Add to local storage basket object
function add(data) {
  console.log('Added to basket');
  console.log(data);
}

// Remove from local storage basket object
function remove(data) {
  console.log('Removed from basket');
  console.log(data);
}

// Retrieve contents of local storage
function get() {
  console.log('Retrieved basket');
}

// Clear local storage basket object
function clear() {
  console.log('Cleared to basket');
}

export { add, remove, get, clear };
