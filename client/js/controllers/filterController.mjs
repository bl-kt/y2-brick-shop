// FUNCTION: Fetch all options for brick colour
async function getBrickColours() {
  let response;
  try {
    response = await fetch('/api/filter/brick/colour/all');
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

// FUNCTION: Fetch all options for brick shape
async function getBrickShapes() {
  let response;
  try {
    response = await fetch('/api/filter/brick/shape/all');
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

// FUNCTION: Fetch all options for brick category
async function getBrickCategories() {
  let response;
  try {
    response = await fetch('/api/filter/brick/category/all');
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

// FUNCTION: Fetch all options for kit category
async function getKitCategories() {
  let response;
  try {
    response = await fetch('/api/filter/kit/category/all');
  } catch (error) {
    console.error(error);
    return;
  }
  const data = await response.json();
  return data;
}

export { getBrickColours, getBrickShapes, getBrickCategories, getKitCategories };
