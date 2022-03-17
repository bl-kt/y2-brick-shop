// Renders Nav Bar
document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('./components/nav.html');
  const nav = await res.text();
  const wrapper = document.querySelector('#navWrapper');
  wrapper.innerHTML = nav;

  const menuToggle = document.querySelector('#menuToggle');
  const navMenu = document.querySelector('#navMenu');

  // Toggles Hamburger Menu
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log('Menu');
  });
});
