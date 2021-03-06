'use strict';

const $dropDown = document.createElement('div');
$dropDown.className = 'dropDown';

$dropDown.innerHTML = `
  <div class="dropDown_container">
    <p class="dropDown_title">π μνμλ μ΄λμ μ νν΄μ£ΌμΈμ</p>
    <div class="dropMenu">
      <button class="dropMenu_selectBtn">μνλ μ΄λμ μ ννμΈμ</button>
      <ul class="dropMenu_list">
        <li class="dropMenu_item">
          <span class="item_text">πͺ ν¬μ€</span>
        </li>
        <li class="dropMenu_item">
          <span class="item_text">πββοΈ μμ</span>
        </li>
        <li class="dropMenu_item">
          <span class="item_text">πΈ λ°°λλ―Όν΄</span>
        </li>
        <li class="dropMenu_item">
          <span class="item_text">π³ λ³Όλ§</span>
        </li>
      </ul>
    </div>
    <button class="dropDown_nextBtn" disabled>λ€μ</button>
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
// μ¬μ©μμ νΈμλ₯Ό κ³ λ € νμλ, κ΅³μ΄ λ²νΌμ λλ₯΄μ§ μκ³ , λ€λ₯Έκ³³μ ν΄λ¦­ν΄λ λ©λ΄ λ²νΌμ λ«κ²ν¨

$dropMenuList.addEventListener('mousedown', (e) => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  $dropMenuBtn.textContent = e.target.textContent;
  $dropMenuList.classList.remove('show');
  $dropMenuBtn.classList.add('selected');
  $dropDownNextBtn.removeAttribute('disabled');
});
// μ΄λ²€νΈμ mousedownμ μ¬μ©ν μ΄μ λ blur μ΄λ²€νΈ λ³΄λ€ λ¨Όμ  μ€ννκΈ° μν΄ μ¬μ©ν¨
// mousedown => blur => mouseup => click μ΄λ²€νΈ μμλ‘ λ°μνλ€

$dropDownNextBtn.addEventListener('click', () => {
  alert('π λ€μ νμ΄μ§λ‘...');
});

export default $dropDown;
