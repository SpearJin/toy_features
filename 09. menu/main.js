'use strcit';

const menu = document.querySelector('.menu');
const toogle = document.querySelector('.toggle');

toogle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
