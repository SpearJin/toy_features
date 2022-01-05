'use strict';

const dropMenuBtn = document.querySelector('.dropMenu_selectBtn');
const dropMenuList = document.querySelector('.dropMenu_list');
const dropDownNextBtn = document.querySelector('.dropDown_nextBtn');

dropMenuBtn.addEventListener('click', () => {
  dropMenuList.classList.toggle('show');
});

dropMenuBtn.addEventListener('blur', () => {
  dropMenuList.classList.remove('show');
});
// 사용자에 편의를 고려 했을때, 굳이 버튼을 누르지 않고, 다른곳을 클릭해도 메뉴 버튼을 닫게함

dropMenuList.addEventListener('mousedown', (e) => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  dropMenuBtn.textContent = e.target.textContent;
  dropMenuList.classList.remove('show');
  dropMenuBtn.classList.add('selected');
  dropDownNextBtn.removeAttribute('disabled');
});
// 이벤트에 mousedown을 사용한 이유는 blur 이벤트 보다 먼저 실행하기 위해 사용함
// mousedown => blur => mouseup => click 이벤트 순서로 발생한다

dropDownNextBtn.addEventListener('click', () => {
  alert('👉 다음 페이지로...');
});
