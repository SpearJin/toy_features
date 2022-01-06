'use strict';

const sidebarMenu = document.querySelector('.sidebar_menu');
const toggleBtn = document.querySelector('.toggleBtn');
const toggleBtnIcon = document.querySelector('.toggleBtn-icon');

toggleBtn.addEventListener('click', () => {
  sidebarMenu.classList.toggle('active');
  toggleBtn.classList.toggle('active');
});
