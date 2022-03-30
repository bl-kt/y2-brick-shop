import data from '../../../data/products.js';
// import { writeProducts, readProducts } from '../helpers.mjs';

function removeAndSave(productID, stockDecrease) {
  // const base = readProducts();
  // const updated = removeStock(base, productID, stockDecrease);
  // writeProducts(updated);
  console.log('beep');
}

function addAndSave(productID, stockIncrease) {
  // const base = readProducts();
  // const updated = addStock(base, productID, stockIncrease);
  // writeProducts(updated);
  console.log('beep');
}

function addStock(productID, stockIncrease) {
  for (let i = 0; i < data.bricks.length; i++) {
    if (data.bricks[i].id === productID) {
      data.bricks[i].stock += stockIncrease;
      console.log(data.bricks[i].stock);
      break;
    }
  }
  console.log('Add stock');
}

function removeStock(data, productID, stockDecrease) {
  for (let i = 0; i < data.bricks.length; i++) {
    if (data.bricks[i].id === productID) {
      data.bricks[i].stock -= stockDecrease;
      break;
    }
  }
  console.log('Remove Stock');
}

export { removeAndSave, addAndSave };
