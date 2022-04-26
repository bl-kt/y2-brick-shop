// FUNCTION: Creates an element, depending on entered parameters, and appends to a parent element.
// Params, in order: [0]Element, [1]parent element, [2]id attribute,
//                   [3]class attribute,[4]text content, [5]href attribute,
//                   [6]value attribute, [7]src attribute, [8] type attribute
function createAndAppend(eleParam, parent, idParam, classParam, textParam, hrefParam, valueParam, srcParam, typeParam) {
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
  if (typeParam !== undefined) {
    element.type = typeParam;
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

// FUNCTION: Get local storage item
function getLS(item) {
  return JSON.parse(localStorage.getItem(`${item}`));
}

export { createAndAppend, isInArr, clearLS, getLS };
