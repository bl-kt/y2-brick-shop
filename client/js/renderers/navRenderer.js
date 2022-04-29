import { updateBasketCounter } from '../controllers/basketController.mjs';

document.addEventListener('DOMContentLoaded', renderNav);


// FUNCTION: Renders nav bar
async function renderNav() {
  const res = await fetch('components/nav.html');
  const nav = await res.text();
  const content = document.querySelector('#navWrapper');
  content.innerHTML = nav;

  const menuToggle = document.querySelector('#menuToggle');
  const navMenu = document.querySelector('#navMenu');

  // const isStaffMode = document.querySelector('#staffMode');
  // isStaffMode.addEventListener('change', () => {
  //   if (isStaffMode.checked) {
  //     console.log('Staff Mode On');
  //   } else {
  //     console.log('Staff Mode Off');
  //   }
  // });

  // Toggles Hamburger Menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  updateBasketCounter();
}
