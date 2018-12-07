'use strict'
const icon = document.querySelector('.icon');
const modal = document.querySelector('.modal');
const textitem = document.querySelectorAll('.text-item');

icon.addEventListener('click', () => {
  icon.classList.toggle('active');
  modal.classList.toggle('active');
  // body.classList.toggle('menuopen');
});

Array.from(textitem).forEach((text) => {
  text.classList.toggle('active');
  text.addEventListener('click', () => {
    modal.classList.toggle('active');
    icon.classList.toggle('active');
    body.classList.toggle('menuopen');
  });
});
