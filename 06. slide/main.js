'use strict';

const slide = document.querySelector('.slide');
const slideCards = document.querySelector('.slide_cards');
const slideBtn = document.querySelector('.slide_btns');
let angle = 0;

const cardImgs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'];

slideBtn.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    return;
  }
  console.log(angle);
  const target = e.target.closest('.btn');
  if (target.className.includes('next')) {
    console.log('next');
    angle -= 45;
    slideCards.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  } else {
    angle += 45;
    slideCards.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  }
});

slideCards.addEventListener('click', (e) => {
  const selectedImg = e.target.className.split(' ')[1];
  const imgOrder = cardImgs.indexOf(selectedImg);
  angle = imgOrder * -45;
  slideCards.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});

function createCard() {
  cardImgs.forEach((img, index) => {
    const card = document.createElement('li');
    card.setAttribute('class', 'slide_card');
    card.setAttribute('style', `--i:${index}`);
    card.innerHTML = `
        <img class="slide_card-img img${index + 1}" src="image/${img}.jpeg" alt="image" />
      `;
    slideCards.appendChild(card);
  });
}

createCard();
