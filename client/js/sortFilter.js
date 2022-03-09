
// renders filter bar
document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('./components/sortFilter.html');
  const querybar = await res.text();
  const wrapper = document.querySelector('#queryWrapper');
  wrapper.innerHTML = querybar;
});
