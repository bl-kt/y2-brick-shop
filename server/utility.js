import * as fs from 'fs/promises';
const productsPath = '../../../data/products.js';

async function readProducts() {
  let fileContent;

  try {
    fileContent = await fs.readFile(productsPath, { encoding: 'UTF-8' });
  } catch (err) {
    console.debug(err);
    return undefined;
  }

  return JSON.parse(fileContent);
}

async function writeProducts(productsJSON) {
  const productsString = JSON.stringify(productsJSON, undefined, 2);

  try {
    await fs.writeFile(productsPath, productsString);
  } catch (err) {
    console.debug(err);
  }
}
