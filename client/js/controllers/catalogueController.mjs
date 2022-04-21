async function getCatalogue(sort, page) {
  let response;
  try {
    response = await fetch(`/api/catalogue/all/${sort}`);
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

export { getCatalogue };
