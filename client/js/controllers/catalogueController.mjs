// FUNCTION: Fetch Catalogue based on params
async function getCatalogue(sort, category, page) {
  let response;
  try {
    response = await fetch(`/api/catalogue/${category}/all/${sort}`);
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

export { getCatalogue };
