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
          <h3 class="photo_inner-title">코끼리</h3>
          <p class="photo_inner-description">
            코끼리는 무게가 수 톤에 달하는 세계에서 가장 큰 육상 동물이다. 크게 아프리카코끼리와 아시아코끼리 두 종류로 나뉘며, 아프리카 사하라 남쪽 지역과 인도, 동남아시아, 중국에 살고 있다.
            매일 약 300kg에 달하는 풀이나 나뭇가지, 뿌리, 열매를 먹고 100ℓ 정도의 물을 마셔야 해서, 하루에 18~20시간은 먹는 데 보낸다. 물이 없는 곳에서는 오래 지낼 수 없어서, 건기에는 코와 엄니로 강바닥을 파 물을 찾거나 평소보다 두 배나 되는 거리를 다니기도 한다.
          </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="tiger">
        <img class="photo_img" src="../05. filter/image/tiger2.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">호랑이</h3>
          <p class="photo_inner-description">
            생물종 분류로는 고양이과에 속하며 사자, 표범, 재규어와 근연속(Panthera)이다. 검은 가로줄무늬가 특징적인데, 생후부터 성장 후에도 남아 있다. 몸통은 길고 발은 비교적 짧고 코와 입끝의 폭이 좁다. 귀는 폭이 좁고 그 등면은 검은색이며 중앙에 크고 흰 얼룩점이 있다. 수컷은 암컷보다 크고 강한 턱과 긴 송곳니가 특징이다. 발톱의 발달이 좋고 특히 첫째, 즉 엄지발톱이 강력하다. 보통 때에는 발톱집 속에 넣어 둔다.
          </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="horse">
        <img class="photo_img" src="../05. filter/image/horse.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">말</h3>
          <p class="photo_inner-description">
            포유강 기제목의 초식동물로서 인간에게 중요한 가축이다. 참고로 현재 볼 수 있는 대다수의 말들은 모두 인간의 손에 의해 길들여지고 교배되어 탄생한 것들로, 매우 오랜 세월동안 인간이 키워온 동물이다.
            그래서, 말은 너무 오랜 시간동안 인간의 손으로 길들여졌기 때문에 편자를 만들어서 발굽을 보호해주고 먹이도 챙겨줘야 하는 등, 인간이 직접 돌봐주지 않으면 자연상태에서 생존할 능력이 없어서 죽어버린다.[7] 야생마가 있기는 하지만 거의 멸종 당했으며 이마저도 인간의 도시 건설로 인한 환경 파괴로 개체 수가 급감했다.
          </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="lion">
        <img class="photo_img" src="../05. filter/image/lion.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">사자</h3>
          <p class="photo_inner-description">
            아시아의 호랑이와 함께 대형 고양이족 가운데 최대의 맹수로서 '백수(百獸)의 왕(王)'으로 불린다. 표범, 재규어, 호랑이와 근연속(Panthera)이다. 수컷 사자와 암컷 호랑이가 교배하여 태어난 종을 라이거(liger), 수컷 호랑이와 암컷 사자가 교배하여 태어난 종을 범사자[tigon], 수컷 표범과 암컷 사자가 교배한 것을 레오폰(leopon), 수컷 재규어와 암컷 사자가 교배시에는 재그라이온(jaglion)이라 한다.
          </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="rhino">
        <img class="photo_img" src="../05. filter/image/rhino.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">코뿔소</h3>
          <p class="photo_inner-description">
            머리에 1개 또는 2개의 뿔이 있다. 마이오세와 플라이오세에는 지구상에 광범위하게 서식하고 있었지만, 현재는 수마트라섬·자바섬·보르네오섬·인도 및 사하라사막 이남의 아프리카 사바나 지방에 분포하고 있을 뿐이다.
            코뿔소의 피부는 두껍고 각질화되어 있으며, 털은 없으나 꼬리에는 굳은 털이 나 있다. 수마트라코뿔소는 비교적 털이 많고, 어깨에 혹 모양의 융기가 있다. 인도코뿔소는 어깨의 앞뒤와 앞다리의 밑부분, 허리에서 뒷다리의 밑부분에 걸쳐 깊은 주름이 있다.
            코뼈에서 앞머리뼈에 1개 또는 2개의 뿔이 있다. 피부가 변화하여 생긴 뿔은 일생 동안 자라며, 사슴의 가지 뿔이나 소의 동각(洞角)과 달리 각질화된 섬유가 모인 것으로 중실각(中實角)이라고 한다.
        </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="tiger">
        <img class="photo_img" src="../05. filter/image/tiger.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">호랑이</h3>
          <p class="photo_inner-description">
            생물종 분류로는 고양이과에 속하며 사자, 표범, 재규어와 근연속(Panthera)이다. 검은 가로줄무늬가 특징적인데, 생후부터 성장 후에도 남아 있다. 몸통은 길고 발은 비교적 짧고 코와 입끝의 폭이 좁다. 귀는 폭이 좁고 그 등면은 검은색이며 중앙에 크고 흰 얼룩점이 있다. 수컷은 암컷보다 크고 강한 턱과 긴 송곳니가 특징이다. 발톱의 발달이 좋고 특히 첫째, 즉 엄지발톱이 강력하다. 보통 때에는 발톱집 속에 넣어 둔다.
          </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="lion">
        <img class="photo_img" src="../05. filter/image/lion2.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">사자</h3>
          <p class="photo_inner-description">
            아시아의 호랑이와 함께 대형 고양이족 가운데 최대의 맹수로서 '백수(百獸)의 왕(王)'으로 불린다. 표범, 재규어, 호랑이와 근연속(Panthera)이다. 수컷 사자와 암컷 호랑이가 교배하여 태어난 종을 라이거(liger), 수컷 호랑이와 암컷 사자가 교배하여 태어난 종을 범사자[tigon], 수컷 표범과 암컷 사자가 교배한 것을 레오폰(leopon), 수컷 재규어와 암컷 사자가 교배시에는 재그라이온(jaglion)이라 한다.
          </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="horse">
        <img class="photo_img" src="../05. filter/image/horse2.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">말</h3>
          <p class="photo_inner-description">
            포유강 기제목의 초식동물로서 인간에게 중요한 가축이다. 참고로 현재 볼 수 있는 대다수의 말들은 모두 인간의 손에 의해 길들여지고 교배되어 탄생한 것들로, 매우 오랜 세월동안 인간이 키워온 동물이다.
            그래서, 말은 너무 오랜 시간동안 인간의 손으로 길들여졌기 때문에 편자를 만들어서 발굽을 보호해주고 먹이도 챙겨줘야 하는 등, 인간이 직접 돌봐주지 않으면 자연상태에서 생존할 능력이 없어서 죽어버린다.[7] 야생마가 있기는 하지만 거의 멸종 당했으며 이마저도 인간의 도시 건설로 인한 환경 파괴로 개체 수가 급감했다.
          </p>
        </div>
        <div class="description"></div>
      </li>
      <li class="photo" data-type="rhino">
        <img class="photo_img" src="../05. filter/image/rhino2.jpg" alt="photo" />
        <div class="photo_inner">
          <h3 class="photo_inner-title">코뿔소</h3>
          <p class="photo_inner-description">
            머리에 1개 또는 2개의 뿔이 있다. 마이오세와 플라이오세에는 지구상에 광범위하게 서식하고 있었지만, 현재는 수마트라섬·자바섬·보르네오섬·인도 및 사하라사막 이남의 아프리카 사바나 지방에 분포하고 있을 뿐이다.
            코뿔소의 피부는 두껍고 각질화되어 있으며, 털은 없으나 꼬리에는 굳은 털이 나 있다. 수마트라코뿔소는 비교적 털이 많고, 어깨에 혹 모양의 융기가 있다. 인도코뿔소는 어깨의 앞뒤와 앞다리의 밑부분, 허리에서 뒷다리의 밑부분에 걸쳐 깊은 주름이 있다.
            코뼈에서 앞머리뼈에 1개 또는 2개의 뿔이 있다. 피부가 변화하여 생긴 뿔은 일생 동안 자라며, 사슴의 가지 뿔이나 소의 동각(洞角)과 달리 각질화된 섬유가 모인 것으로 중실각(中實角)이라고 한다.
          </p>
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
