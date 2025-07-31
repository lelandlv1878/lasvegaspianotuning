
document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', () => {
    const next = item.nextElementSibling;
    if (next.style.display === 'block') {
      next.style.display = 'none';
    } else {
      next.style.display = 'block';
    }
  });
});
