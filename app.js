var btn = document.querySelector('.hamburger');
var header = document.querySelector('.main-lists');
btn.addEventListener('click', () => {
  if (header.style.height == '25vh') {
    header.style.height = '0vh';
  } else header.style.height = '25vh';
});
