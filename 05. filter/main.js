'use strict';

const $gallery = document.createElement('div');
$gallery.className = 'gallery';

$gallery.innerHTML = `
  <div class="gallery_container">
    <h1 class="gallery_title">Gallery</h1>
    <div class="gallery_categories">
      <button class="category selected" data-filter="*">
        <span class="category_name">All</span>
        <span class="categoty_count">9</span>
      </button>
      <button class="category" data-filter="lion">
        <span class="category_name">Lion</span>
        <span class="categoty_count">2</span>
      </button>
    <button class="category" data-filter="horse">
      <span class="category_name">Horse</span>
      <span class="categoty_count">2</span>
    </button>
      <button class="category" data-filter="rhino">
        <span class="category_name">Rhino</span>
        <span class="categoty_count">3</span>
      </button>
      <button class="category" data-filter="tiger">
        <span class="category_name">Tiger</span>
        <span class="categoty_count">2</span>
      </button>
    </div>

    <ul class="photos">
      <li class="photo" data-type="rhino">
        <img class="photo_img" src="../05. filter/image/ele.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/ele.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="tiger">
        <img class="photo_img" src="../05. filter/image/tiger2.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/tiger2.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="horse">
        <img class="photo_img" src="../05. filter/image/horse.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/horse.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="lion">
        <img class="photo_img" src="../05. filter/image/lion.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/lion.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="rhino">
        <img class="photo_img" src="../05. filter/image/rhino.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/rhino.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="tiger">
        <img class="photo_img" src="../05. filter/image/tiger.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/tiger.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="lion">
        <img class="photo_img" src="../05. filter/image/lion2.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/lion2.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="horse">
        <img class="photo_img" src="../05. filter/image/horse2.jpg" alt="photo" />
        <div class="photo_inner">
          <a href="../05. filter/image/horse2.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="rhino">
        <img class="photo_img" src="../05. filter/image/rhino2.jpg" alt="photo" />
        <div class="photo_inner">
          <a class="photo_inner-link" href="../05. filter/image/rhino2.jpg">
            <i class="fas fa-search-plus"></i>
          </a>
        </div>
        <div class="description"></div>
      </li>
    </ul>
  </div>
`;

const $categoryBtn = $gallery.querySelector('.gallery_categories');
const $photos = $gallery.querySelector('.photos');
const $photoItem = $gallery.querySelectorAll('.photo');

$categoryBtn.addEventListener('click', (e) => {
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
  $photos.classList.add('aniout');
  // photos에 aniout 클래스를 추가시켜 애니메이션 효과를 줌

  setTimeout(() => {
    $photoItem.forEach((photo) => {
      if (selectedFilter === '*' || photo.dataset.type === selectedFilter) {
        // html에 data-filter와 data-type을 비교함
        photo.style.display = 'block';
      } else {
        photo.style.display = 'none';
      }
    });
    $photos.classList.remove('aniout');
    // setTimeout을 이용하여 비동기 적으로 photos에 aniout 클래스를 제거하여 애니메이션 효과를 줌
  }, 500);
});

export default $gallery;
