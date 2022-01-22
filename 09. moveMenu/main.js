'use strict';
import Menu from '../08. menu/main.js';

const $moveBtn = document.createElement('div');
$moveBtn.className = 'move_menu';

$moveBtn.innerHTML = `
  <button class="move_menu_btn">
    뒤로
  </button>
`;

$moveBtn.addEventListener('click', () => {
  document.body.innerHTML = '';
  document.body.appendChild(Menu);
});

export default $moveBtn;
