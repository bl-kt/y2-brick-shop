import data from '../../../data/products.js';

function addStock(productID, stockIncrease) {
  // for (let i = 0; i < data.bricks.length; i++) {
  //   if (data.bricks[i].id === productID) {
  //     data.bricks[i].stock += stockIncrease;
  //     console.log(data.bricks[i].stock);
  //     break;
  //   }
  // }
  console.log('Add stock')
}

function removeStock(productID, stockDecrease) {
  for (let i = 0; i < data.bricks.length; i++) {
    if (data.bricks[i].id === productID) {
      data.bricks[i].stock -= stockDecrease;
      break;
    }
  }
  console.log('Remove Stock')
}

export { addStock, removeStock };
