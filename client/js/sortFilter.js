import { colours, dimensions} from './data/filters.json';

function populateFilter() {
    // loop through filter list
        // per colour, add li to ul
        // add event listener for when click, export filter name
};

function populateSort() {

};

function filter() {
    // takes filter param
    // filter
};

function sort() {
    // gets sort param
    // sorts
};

// renders filter bar
document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('./components/nav.html');
    const querybar = await res.text();
    const wrapper = document.querySelector('#queryWrapper');
    wrapper.innerHTML = querybar;
});

