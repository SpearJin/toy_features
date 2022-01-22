'use strict';

const $slide = document.createElement('div');
$slide.className = 'slide';

$slide.innerHTML = `
  <div class="slide_container">
    <ul class="slide_cards"></ul>
    <div class="slide_btns">
        <button class="btn preview">
          <span>
            <i class="fas fa-arrow-left"></i>
          </span>
        </button>
        <button class="btn next">
          <span>
            <i class="fas fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
`;

const $slideCards = $slide.querySelector('.slide_cards');
const $slideBtn = $slide.querySelector('.slide_btns');
let angle = 0;
const cardImgs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];

$slideBtn.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    return;
  }
  const target = e.target.closest('.btn');
  if (target.className.includes('next')) {
    angle -= 45;
    $slideCards.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  } else {
    angle += 45;
    $slideCards.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  }
});

$slideCards.addEventListener('click', (e) => {
  const selectedImg = e.target.className.split(' ')[1];
  const imgOrder = cardImgs.indexOf(selectedImg);
  angle = imgOrder * -45;
  $slideCards.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});

function createCard() {
  cardImgs.forEach((img, index) => {
    const card = document.createElement('li');
    card.setAttribute('class', 'slide_card');
    card.setAttribute('style', `--i:${index}`);
    card.innerHTML = `
        <img class="slide_card-img img${index + 1}" src="../06. slide/image/${img}.jpeg" alt="image" />
      `;
    $slideCards.appendChild(card);
  });
}

createCard();

export default $slide;
