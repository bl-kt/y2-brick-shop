document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('./components/nav.html');
  const nav = await res.text();
  const wrapper = document.querySelector('#navWrapper');
  wrapper.innerHTML = nav;
});
