'use strict';

const categoryBtn = document.querySelector('.gallery_categories');
const photos = document.querySelector('.photos');
const photoItem = document.querySelectorAll('.photo');

categoryBtn.addEventListener('click', (e) => {
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  const selected = document.querySelector('.selected');
  if (target.className.includes('selected')) {
    return;
  }
  // 이미 선택된 filter 버튼 클릭시 return 예외처리

  if (target.nodeName !== 'BUTTON') {
    return;
  }
  // BUTTON 노드가 아니면 return 하도록 예외처리

  selected.classList.remove('selected');
  target.classList.add('selected');

  const selectedFilter = target.dataset.filter;
  photos.classList.add('aniout');
  // photos에 aniout 클래스를 추가시켜 애니메이션 효과를 줌

  setTimeout(() => {
    photoItem.forEach((photo) => {
      if (selectedFilter === '*' || photo.dataset.type === selectedFilter) {
        // html에 data-filter와 data-type을 비교함
        photo.style.display = 'block';
      } else {
        photo.style.display = 'none';
      }
    });
    photos.classList.remove('aniout');
    // setTimeout을 이용하여 비동기 적으로 photos에 aniout 클래스를 제거하여 애니메이션 효과를 줌
  }, 500);
});
