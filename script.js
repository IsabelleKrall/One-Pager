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

//Move the arrow up on mouseover:
const arrowUp = document.querySelector('.to-top')
const arrow = document.querySelector('.arrow')
const newArrow = document.querySelector('.to-top img')


arrowUp.addEventListener('mouseover', () => {
  arrow.classList.add('move');
  newArrow.setAttribute("src", "img/pil-upp-bla.svg")
});

arrowUp.addEventListener('mouseout', () => {
  newArrow.setAttribute("src", "img/pil-upp.svg");
});
