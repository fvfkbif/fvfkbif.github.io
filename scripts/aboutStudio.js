let offset = 0;
const maxOffset = 8 - 3; // Total elements - elements on screen
const sliderLine = document.querySelector('.slider-line');

function applyOffset() {
  const width = document.getElementById('slide').clientWidth;
  if (offset > maxOffset) {
    offset = 0;
  }
  if (offset < 0) {
    offset = maxOffset;
  }
  sliderLine.style.left = (-offset * width) + 'px';
}

window.addEventListener('resize', function (event) {
  setTimeout(applyOffset, 1000);
});

document.querySelector('.next').addEventListener('click', function () {
  offset++;
  applyOffset();
});

document.querySelector('.prev').addEventListener('click', function () {
  offset--;
  applyOffset();
});