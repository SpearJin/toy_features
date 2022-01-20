'use strict';

const $navbar = document.createElement('navbar');
$navbar.className = 'navbar';

$navbar.innerHTML = `
  <div class="navbar_container">
    <ul class="navbar_list">
      <li class="navbar_list_item active">
        <ion-icon class="item_icon" name="home-outline"></ion-icon>
        <span class="item_title">Home</span>
      </li>
      <li class="navbar_list_item">
        <ion-icon class="item_icon" name="person-outline"></ion-icon>
        <span class="item_title">Profile</span>
      </li>
      <li class="navbar_list_item">
        <ion-icon class="item_icon" name="chatbox-outline"></ion-icon>
        <span class="item_title">Message</span>
      </li>
      <li class="navbar_list_item">
        <ion-icon class="item_icon" name="camera-outline"></ion-icon>
        <span class="item_title">Camera</span>
      </li>
      <li class="navbar_list_item">
        <ion-icon class="item_icon" name="settings-outline"></ion-icon>
        <span class="item_title">Setting</span>
      </li>
      <div class="navbar_list_selected"></div>
    </ul>
  </div>
`;

const $navbarList = $navbar.querySelector('.navbar_list');

$navbarList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'UL') {
    return;
  }
  // ul노드 선택시 예외처리

  const target = e.target.nodeName === 'LI' ? e.target : e.target.closest('.navbar_list_item');
  // LI노드만 선택될 수 있게 삼항연산자로 조건을 줌
  if (target.className.includes('active')) {
    return;
  }
  // 이미 선택된 메뉴를 누르면 밑에 코드가 실행되지 않게 예외처리

  const active = e.currentTarget.querySelector('.active');
  active.classList.remove('active');
  target.classList.add('active');
});

export default $navbar;
