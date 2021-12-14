let offset = 0;
var element = document.getElementById('slide');
var positionInfo = element.getBoundingClientRect();
var width = positionInfo.width;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function () {
  offset += width;
  if(offset > 5 * width){
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
  offset -= width;
  if(offset < 0){
    offset = 5 * width;
  }
  sliderLine.style.left = -offset + 'px';
});