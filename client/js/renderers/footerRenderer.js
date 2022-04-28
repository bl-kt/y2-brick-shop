document.addEventListener('DOMContentLoaded', renderFooter);

async function renderFooter() {
  const res = await fetch('components/footer.html');
  const nav = await res.text();
  const content = document.querySelector('#footerWrapper');
  content.innerHTML = nav;
}
