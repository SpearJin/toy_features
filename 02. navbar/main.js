'use strict';

const navbarList = document.querySelector('.navbar_list');

navbarList.addEventListener('click', (e) => {
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
