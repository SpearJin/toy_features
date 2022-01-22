'use strict';

const $sideBar = document.createElement('div');
$sideBar.className = 'sidebar';

$sideBar.innerHTML = `
  <div class="sideba_container">
    <ul class="sidebar_menu">
      <li class="sidebar_menu_list">
        <a href="#">
          <span class="list-icon">
            <i class="fas fa-home"></i>
          </span>
          <span class="list-title">Home</span>
        </a>
      </li>
      <li class="sidebar_menu_list">
        <a href="#">
          <span class="list-icon">
            <i class="far fa-user"></i>
          </span>
          <span class="list-title">Profile</span>
        </a>
      </li>
      <li class="sidebar_menu_list">
        <a href="#">
          <span class="list-icon">
            <i class="far fa-comment-alt"></i>
          </span>
          <span class="list-title">Message</span>
        </a>
      </li>
      <li class="sidebar_menu_list">
        <a href="#">
          <span class="list-icon">
            <i class="far fa-question-circle"></i>
          </span>
          <span class="list-title">Help</span>
        </a>
      </li>
      <li class="sidebar_menu_list">
        <a href="#">
          <span class="list-icon">
            <i class="fas fa-cog"></i>
          </span>
          <span class="list-title">Setting</span>
        </a>
      </li>
      <li class="sidebar_menu_list">
        <a href="#">
          <span class="list-icon">
            <i class="fas fa-lock"></i>
          </span>
          <span class="list-title">Password</span>
        </a>
      </li>
      <li class="sidebar_menu_list">
        <a href="#">
          <span class="list-icon">
            <i class="fas fa-sign-out-alt"></i>
          </span>
          <span class="list-title">Sign Out</span>
        </a>
      </li>
    </ul>
    <div class="toggleBtn">
      <span class="toggle-line"></span>
      <span class="toggle-line"></span>
      <span class="toggle-line"></span>
    </div>
  </div>
`;

const $sidebarMenu = $sideBar.querySelector('.sidebar_menu');
const $toggleBtn = $sideBar.querySelector('.toggleBtn');

$toggleBtn.addEventListener('click', () => {
  $sidebarMenu.classList.toggle('active');
  $toggleBtn.classList.toggle('active');
});

export default $sideBar;
