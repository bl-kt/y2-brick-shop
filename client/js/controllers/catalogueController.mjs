// FUNCTION: Fetch Catalogue based on params
async function getCatalogue(sort, category, search, searchCat) {
  let response;
  try {
    const url = new URL(`/api/catalogue/${category}/all`, document.location.origin);
    url.searchParams.set('category', category);
    url.searchParams.set('sort', sort ?? '');
    url.searchParams.set('search', search ?? '');
    url.searchParams.set('searchCat', searchCat ?? '');
    response = await fetch(url.href);
    console.log(url.href);
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

export { getCatalogue };
