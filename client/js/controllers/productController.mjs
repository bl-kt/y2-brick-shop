async function getCatalogue() {
  let response;
  try {
    response = await fetch('/api/product/all');
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

module.exports = { getCatalogue };
