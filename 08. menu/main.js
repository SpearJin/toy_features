'use strict';
import Stepper from '../01. steper/main.js';
import Navbar from '../02. navbar/main.js';
import DropMenu from '../03. dropMenu/main.js';

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
      <li class="list-item" style="--i: 3">
        <a href="#" class="item-link">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 4">
        <a href="#" class="item-link">
          <ion-icon name="key-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 5">
        <a href="#" class="item-link">
          <ion-icon name="videocam-outline"></ion-icon>
        </a>
      </li>
      <li class="list-item" style="--i: 6">
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
    case 'Navbar':
      changePage(Navbar);
    case 'DropMenu':
      changePage(DropMenu);
  }
});

function changePage(target) {
  document.body.innerHTML = '';
  document.body.appendChild(target);
}

export default $menu;
