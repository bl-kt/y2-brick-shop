// FUNCTION: Creates an element, depending on entered parameters, and appends to a parent element.
function createAndAppend(eleParam, parent, idParam, classParam, textParam, hrefParam, valueParam, srcParam) {
  const element = document.createElement(eleParam);

  if (idParam !== undefined) {
    element.id = idParam;
  }
  if (classParam !== undefined) {
    element.classList.add(classParam);
  }
  if (textParam !== undefined) {
    element.textContent = textParam;
  }
  if (hrefParam !== undefined) {
    element.href = hrefParam;
  }
  if (valueParam !== undefined) {
    element.value = valueParam;
  }
  if (srcParam !== undefined) {
    element.src = srcParam;
  }
  parent.appendChild(element);
  return element;
}

// FUNCTION: Filter to check if within basket - boolean
function isInArr(arr, product) {
  return arr.filter(item => product.id === item.product.id).length;
}

// FUNCTION: Clear local storage basket object
function clearLS(item) {
  localStorage.setItem(`${item}`, JSON.stringify([]));
}

function getLS(item) {
  return JSON.parse(localStorage.getItem(`${item}`));
}

export { createAndAppend, isInArr, clearLS, getLS };
