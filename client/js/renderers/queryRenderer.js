import * as filter from '../controllers/filterController.mjs';
import * as cat from './catalogueRenderer.js';
import { createAndAppend } from '../helpers.js';

let sortRadio;
let filterRadio;
let filterCategory;

// FUNCTION: Render Sort/Filter Bar
async function renderQueryBar(category) {
  const res = await fetch('./components/sortFilter.html');
  const querybar = await res.text();
  const wrapper = document.querySelector('#queryWrapper');
  wrapper.innerHTML = querybar;

  const toggle = document.querySelector('#openSortFilter');
  const menu = document.querySelector('#sortFilterWrapper');
  toggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    } else {
      menu.classList.add('open');
    }
  });

  const breadcrumb = document.querySelector('#breadcrumb');
  breadcrumb.textContent = ` Catalogue / All ${category}s`;
}

// FUNCTION: Render the sort/filter menu/sidebar
async function renderSortFilterMenu(category) {
  const filters = [];

  // Data to render sort/filter with
  const brickColours = await filter.getBrickColours();
  const brickCategories = await filter.getBrickCategories();
  const getKitCategories = await filter.getKitCategories();
  const sorts = [
    { name: 'Alphabetical', value: 'ABC' },
    { name: 'Reverse Alphabetical', value: 'CBA' },
    { name: 'Price: Low to High', value: 'PASC' },
    { name: 'Price: High to Low', value: 'PDES' },
    { name: 'Category, A-Z', value: 'CASC' },
    { name: 'Category, Z-A', value: 'CDESC' },
  ];

  switch (category) {
    case 'product':
      // filters.push({ name: 'brickColours', options: brickColours });
      // filters.push({ name: 'brickCategories', options: brickCategories });
      // filters.push({ name: 'kitCategories', options: getKitCategories });
      break;
    case 'brick':
      filters.push({ name: 'brickColours', options: brickColours });
      filters.push({ name: 'brickCategories', options: brickCategories });
      break;
    case 'kit':
      filters.push({ name: 'kitCategories', options: getKitCategories });
      break;
  }

  // Render points to anchor other content to
  const wrapper = document.querySelector('#sortFilterWrapper');
  const content = createAndAppend('div', wrapper, undefined, 'content');

  // Sorts
  const sortWrapper = createAndAppend('div', content, 'sortWrapper');
  const sortContent = createAndAppend('div', sortWrapper, 'sortContent');
  createAndAppend('h1', sortContent, undefined, undefined, 'Sort');
  for (const sort of sorts) {
    const radio = createAndAppend('input', sortContent, `${sort.name}`, 'radio', undefined, undefined, `${sort.value}`, undefined, 'radio', 'sort');
    radio.addEventListener('click', () => {
      // renderCatalogue(radio.value, category);
      sortRadio = radio.value;
    });
    createAndAppend('label', sortContent, undefined, 'label', `${sort.name}`);
  }

  // Filters
  for (const option of filters) {
    renderCategory(content, option);
  }
  const sortFilterBtn = createAndAppend('button', content, 'sortFilterBtn', 'btn', 'Apply');
  sortFilterBtn.addEventListener('click', () => {
    cat.renderCatalogue(sortRadio, category, filterRadio, filterCategory);
  });
}

// FUNCTION: Render a category for the dynamic filter population
function renderCategory(parent, group) {
  const wrapper = createAndAppend('div', parent, `${group.name}Wrapper`);
  const content = createAndAppend('div', wrapper, `${group.name}Content`);
  createAndAppend('h1', content, undefined, undefined, `${group.name}`);
  for (const item of group.options) {
    // To enable choice of multiple filters, change name attribute to group.name
    const radio = createAndAppend('input', content, `${group.name}${item.value}`, 'radio', `${item.value}`, undefined, `${item.value}`, undefined, 'radio', 'filterRadio');
    createAndAppend('label', content, undefined, 'label', `${item.value}`);
    radio.addEventListener('click', () => {
      switch (group.name) {
        case 'brickCategories':
          filterCategory = 'cat';
          break;
        case 'kitCategories':
          filterCategory = 'cat';
          break;
        case 'brickColours':
          filterCategory = 'colour';
          break;
      }
      filterRadio = radio.value;
    });
  }
}

export { renderSortFilterMenu, renderQueryBar };
