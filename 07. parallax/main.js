'use strict';

const $parallax = document.createElement('div');
$parallax.className = 'parallax';
$parallax.innerHTML = `
  <header class="header">
    <ul class="parallax_list">
      <li class="parallax_list-item"><a href="#" class="active">Home</a></li>
      <li class="parallax_list-item"><a href="#">About</a></li>
      <li class="parallax_list-item"><a href="#">Work</a></li>
      <li class="parallax_list-item"><a href="#">Contact</a></li>
    </ul>
  </header>
  <section class="section">
    <img src="../07. parallax/image/stars.png" class="stars" />
    <img src="../07. parallax/image/moon.png" class="moon" />
    <img src="../07. parallax/image/mountains_behind.png" class="mountains_behind" />
    <h2 class="text">Moon Light</h2>
    <a class="parallax_btn">설명</a>
    <img src="../07. parallax/image/mountains_front.png" class="mountains_front" />
  </section>
  <div class="sec" class="sec">
  <h2 class="parallax_description_title">Parallax Scrolling Effects</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis! Deserunt, atque laboriosam.
    Nesciunt quis vel excepturi praesentium rem exercitationem perspiciatis provident autem quam pariatur
    consequatur, a ea, ullam rerum?<br /><br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corporis ratione porro laudantium, culpa,
    maiores modi maxime cum, impedit ad consequuntur magni reiciendis dolore consectetur odio dignissimos nihil ab
    natus veniam! Magni aspernatur architecto consectetur maxime reprehenderit accusantium nisi, debitis sit
    blanditiis id sequi deleniti sunt distinctio iure neque quos sed officia velit obcaecati est pariatur ipsa?
    Molestiae vero at accusantium reiciendis quis aperiam nam debitis dolores recusandae minus vitae doloremque
    perferendis, pariatur voluptatibus, quo aut quasi eligendi voluptas consequuntur placeat in! Sapiente quod dicta
    eligendi doloremque id quidem laboriosam necessitatibus eaque, totam odio, expedita, porro reprehenderit vero
    maxime voluptatum?<br /><br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corporis ratione porro laudantium, culpa,
    maiores modi maxime cum, impedit ad consequuntur magni reiciendis dolore consectetur odio dignissimos nihil ab
    natus veniam! Magni aspernatur architecto consectetur maxime reprehenderit accusantium nisi, debitis sit
    blanditiis id sequi deleniti sunt distinctio iure neque quos sed officia velit obcaecati est pariatur ipsa?
    Molestiae vero at accusantium reiciendis quis aperiam nam debitis dolores recusandae minus vitae doloremque
    perferendis, pariatur voluptatibus, quo aut quasi eligendi voluptas consequuntur placeat in! Sapiente quod dicta
    eligendi doloremque id quidem laboriosam necessitatibus eaque, totam odio, expedita, porro reprehenderit vero
    maxime voluptatum?<br /><br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio nemo reprehenderit autem, earum
    temporibus, quisquam libero sint aperiam natus pariatur dignissimos labore incidunt odio iusto cum suscipit? Et,
    excepturi.<br /><br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut consequatur earum repellat libero dicta
    culpa praesentium laudantium, tempora repellendus obcaecati dignissimos expedita ea officia animi aliquid!
    Corporis at voluptate, a earum laudantium possimus repellendus impedit minus quas eligendi quia architecto
    expedita velit ea. Mollitia praesentium nobis perspiciatis adipisci nisi eius et neque dignissimos in, accusamus
    doloribus laborum ipsam! Eaque?<br /><br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ut consequatur earum repellat libero dicta
    culpa praesentium laudantium, tempora repellendus obcaecati dignissimos expedita ea officia animi aliquid!
    Corporis at voluptate, a earum laudantium possimus repellendus impedit minus quas eligendi quia architecto
    expedita velit ea. Mollitia praesentium nobis perspiciatis adipisci nisi eius et neque dignissimos in, accusamus
    doloribus laborum ipsam! Eaque?
  </p>
</div>
`;

const $stars = $parallax.querySelector('.stars');
const $moon = $parallax.querySelector('.moon');
const $mountains_behind = $parallax.querySelector('.mountains_behind');
const $text = $parallax.querySelector('.text');
const $btn = $parallax.querySelector('.parallax_btn');
const $title = $parallax.querySelector('.parallax_description_title');

$btn.addEventListener('click', () => {
  $title.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  $stars.style.left = value * 0.25 + 'px';
  $moon.style.top = value * 1.05 + 'px';
  $mountains_behind.style.top = value * 0.5 + 'px';
  $text.style.marginRight = value * 4 + 'px';
  $text.style.marginTop = value * 1.5 + 'px';
  $btn.style.marginTop = value * 1.5 + 'px';
});

export default $parallax;
