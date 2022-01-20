'use strict';

const $dropDown = document.createElement('div');
$dropDown.className = 'dropDown';

$dropDown.innerHTML = `
  <div class="dropDown_container">
    <p class="dropDown_title">👍 원하시는 운동을 선택해주세요</p>
    <div class="dropMenu">
      <button class="dropMenu_selectBtn">원하는 운동을 선택하세요</button>
      <ul class="dropMenu_list">
        <li class="dropMenu_item">
          <span class="item_text">💪 헬스</span>
        </li>
        <li class="dropMenu_item">
          <span class="item_text">🏊‍♀️ 수영</span>
        </li>
        <li class="dropMenu_item">
          <span class="item_text">🏸 배드민턴</span>
        </li>
        <li class="dropMenu_item">
          <span class="item_text">🎳 볼링</span>
        </li>
      </ul>
    </div>
    <button class="dropDown_nextBtn" disabled>다음</button>
  </div>
`;

const $dropMenuBtn = $dropDown.querySelector('.dropMenu_selectBtn');
const $dropMenuList = $dropDown.querySelector('.dropMenu_list');
const $dropDownNextBtn = $dropDown.querySelector('.dropDown_nextBtn');

$dropMenuBtn.addEventListener('click', () => {
  $dropMenuList.classList.toggle('show');
});

$dropMenuBtn.addEventListener('blur', () => {
  $dropMenuList.classList.remove('show');
});
// 사용자에 편의를 고려 했을때, 굳이 버튼을 누르지 않고, 다른곳을 클릭해도 메뉴 버튼을 닫게함

$dropMenuList.addEventListener('mousedown', (e) => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  $dropMenuBtn.textContent = e.target.textContent;
  $dropMenuList.classList.remove('show');
  $dropMenuBtn.classList.add('selected');
  $dropDownNextBtn.removeAttribute('disabled');
});
// 이벤트에 mousedown을 사용한 이유는 blur 이벤트 보다 먼저 실행하기 위해 사용함
// mousedown => blur => mouseup => click 이벤트 순서로 발생한다

$dropDownNextBtn.addEventListener('click', () => {
  alert('👉 다음 페이지로...');
});

export default $dropDown;
