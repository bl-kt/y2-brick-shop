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

export { getProductByID };
