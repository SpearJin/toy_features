'use strict';

const $stepper = document.createElement('div');
$stepper.className = 'stepper';

$stepper.innerHTML = `
    <div class="stepper_container">
      <button class="steper_btn btn-minues">-</button>
      <span class="steper_count">5</span>
      <button class="steper_btn btn-plus">+</button>
    </div>
  `;

// const $steper = document.querySelector('.steper');
const $steperCount = $stepper.querySelector('.steper_count');
let countValue = Number($steperCount.textContent);
// steperCount의 value값은 string이므로 number타입으로 변환함

$stepper.addEventListener('click', (e) => {
  const target = e.target;
  const selected = target.className.split(' ');
  // target에 class이름이 여러개이면 배열로 재정의함
  if (selected.includes('btn-plus')) {
    countValue++;
  } else if (selected.includes('btn-minues')) {
    countValue = countValue > 0 ? countValue - 1 : 0;
    // 0이하로 떨어지지 않게 처리함
  }
  $steperCount.textContent = countValue;
});

export default $stepper;
