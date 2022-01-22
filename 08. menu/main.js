'use strict';
import Stepper from '../01. steper/main.js';
import Navbar from '../02. navbar/main.js';
import DropMenu from '../03. dropMenu/main.js';
import SideBar from '../04. sidebarMenu/main.js';
import Filter from '../05. filter/main.js';
import Slide from '../06. slide/main.js';
import Parallax from '../07. parallax/main.js';
import MovrMenu from '../09. moveMenu/main.js';

const $menu = document.createElement('div');
$menu.className = 'menu';
$menu.innerHTML = `
  <div class="menu_container">
    <h1 class="menu_title">SpearJin ToyProject</h1>
    <div class="toggle">
      <ion-icon name="add-outline"></ion-icon>
    </div>
    <ul class="list">
      <li class="list-item" style="--i: 0" data-menu="Stepper">
        <a href="#" class="item-link">
          Stepper
        </a>
      </li>
      <li class="list-item" style="--i: 1" data-menu="Navbar">
        <a href="#" class="item-link">
          Navbar
        </a>
      </li>
      <li class="list-item" style="--i: 2" data-menu="DropMenu">
        <a href="#" class="item-link">
          Drop<br/>
          Menu
        </a>
      </li>
      <li class="list-item" style="--i: 3" data-menu="SideBar">
        <a href="#" class="item-link">
          Sidebar<br/>
          Menu
        </a>
      </li>
      <li class="list-item" style="--i: 4" data-menu="Filter">
        <a href="#" class="item-link">
          Filter
        </a>
      </li>
      <li class="list-item" style="--i: 5" data-menu="Slide">
        <a href="#" class="item-link">
          Slide
        </a>
      </li>
      <li class="list-item" style="--i: 6" data-menu="Parallax">
        <a href="#" class="item-link">
          Parallax
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
      Stepper.append(MovrMenu);
      changePage(Stepper);
      return;
    case 'Navbar':
      Navbar.append(MovrMenu);
      changePage(Navbar);
      return;
    case 'DropMenu':
      DropMenu.append(MovrMenu);
      changePage(DropMenu);
      return;
    case 'SideBar':
      SideBar.append(MovrMenu);
      changePage(SideBar);
      return;
    case 'Filter':
      Filter.append(MovrMenu);
      changePage(Filter);
      return;
    case 'Slide':
      Slide.append(MovrMenu);
      changePage(Slide);
      return;
    case 'Parallax':
      Parallax.append(MovrMenu);
      changePage(Parallax);
      return;
  }
});

function changePage(target) {
  document.body.innerHTML = '';
  document.body.appendChild(target);
}

export default $menu;
