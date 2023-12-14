let isDragging = false;
let startX, scrollLeft;

const imageContainer = document.getElementById('image-container');

imageContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - imageContainer.offsetLeft;
  scrollLeft = imageContainer.scrollLeft;
});

imageContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});

imageContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

imageContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - imageContainer.offsetLeft;
  const walk = (x - startX) * 3;
  imageContainer.scrollLeft = scrollLeft - walk;
});