'use strict';
import Stepper from '../01. steper/main.js';
import Navbar from '../02. navbar/main.js';
import DropMenu from '../03. dropMenu/main.js';
import SideBar from '../04. sidebarMenu/main.js';
import Filter from '../05. filter/main.js';
import Slide from '../06. slide/main.js';
import Parallax from '../07. parallax/main.js';

const $menu = document.createElement('div');
$menu.className = 'menu';
$menu.innerHTML = `
  <div class="menu_container">
    <div class="toggle">
      <ion-icon name="add-outline"></ion-icon>
    </div>
    <ul class="list">
      <li class="list-item" style="--i: 0" data-menu="Stepper">
        <a href="#" class="item-link">
          <ion-icon name="home-outline">Stepper</ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 1" data-menu="Navbar">
        <a href="#" class="item-link">
          <ion-icon name="person-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 2" data-menu="DropMenu">
        <a href="#" class="item-link">
          <ion-icon name="settings-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 3" data-menu="SideBar">
        <a href="#" class="item-link">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 4" data-menu="Filter">
        <a href="#" class="item-link">
          <ion-icon name="key-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 5" data-menu="Slide">
        <a href="#" class="item-link">
          <ion-icon name="videocam-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 6" data-menu="Parallax">
        <a href="#" class="item-link">
          <ion-icon name="camera-outline"></ion-icon>
        </a>
      </li>
    </ul>
  </div>
`;
const $toogle = $menu.querySelector('.toggle');

$toogle.addEventListener('click', () => {
  $menu.classList.toggle('active');
});

$menu.querySelector('.list').addEventListener('click', (e) => {
  const target = e.target.closest('li');
  if (target === null) return;

  switch (target.dataset.menu) {
    case 'Stepper':
      changePage(Stepper);
      return;
    case 'Navbar':
      changePage(Navbar);
      return;
    case 'DropMenu':
      changePage(DropMenu);
      return;
    case 'SideBar':
      changePage(SideBar);
      return;
    case 'Filter':
      changePage(Filter);
      return;
    case 'Slide':
      changePage(Slide);
      return;
    case 'Parallax':
      changePage(Parallax);
      return;
  }
});

function changePage(target) {
  document.body.innerHTML = '';
  document.body.appendChild(target);
}

export default $menu;
