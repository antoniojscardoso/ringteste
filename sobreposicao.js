const overlay = document.getElementById('overlay');
const gridItems = document.querySelectorAll('.grid');

gridItems.forEach(item => {
  item.addEventListener('click', function() {
    overlay.style.display = 'block';
  });
});

overlay.addEventListener('click', function() {
  overlay.style.display = 'none';
});