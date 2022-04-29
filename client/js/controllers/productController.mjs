// FUNCTION: Fetch product from API by id.
async function getProductByID(id) {
  let response;
  try {
    response = await fetch(`/api/product/${id}`);
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

async function getColours() {
  let response;
  try {
    response = await fetch('/api/product/colour/all');
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

async function getProductByShapeAndColour(shape, colour) {
  let response;
  console.log('shape' + shape);
  try {
    response = await fetch(`/api/product/${shape}/${colour}`);
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

export { getProductByID, getProductByShapeAndColour, getColours };
