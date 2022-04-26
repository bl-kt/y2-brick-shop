import { getProductByID } from '../controllers/productController.mjs';

const url = window.location.search;
const USP = new URLSearchParams(url);
const productID = USP.get('id');

console.log(productID);

const data = getProductByID(productID);

console.log(data);
