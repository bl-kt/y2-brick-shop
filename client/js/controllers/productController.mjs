async function getCatalogue() {
  let response;
  try {
    response = await fetch('/api/product/cat');
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

export { getCatalogue };
