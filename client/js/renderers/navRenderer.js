import { updateBasketCounter } from '../controllers/basketController.mjs';
import { controllerInit } from '../controllers/authController.mjs';

document.addEventListener('DOMContentLoaded', renderNav);


// FUNCTION: Renders nav bar
async function renderNav() {
  const res = await fetch('components/nav.html');
  const nav = await res.text();
  const content = document.querySelector('#navWrapper');
  content.innerHTML = nav;

  const menuToggle = document.querySelector('#menuToggle');
  const navMenu = document.querySelector('#navMenu');

  // Toggles Hamburger Menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  updateBasketCounter();
  // controllerInit();
}
