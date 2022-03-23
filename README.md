# 바닐라 자바스크립트로 기능별 구현

## :raised_hands: 프로젝트 소개
* 하나의 메인 페이지에서 여러 페이지로 넘어갈수 있도록 하였습니다
* stepper, navbar, dropMenu, sidebarMenu, filter, 3D-slide, parallax 기능을 구현 하였습니다
## :clipboard: 기술스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 

## :paperclip: 배포 주소
https://spearjin.github.io/toy_features/

## :pencil2: 구현
  * 하나의 페이지에서 여러 js 관리
    * 구현 방법
      * index.html에서 script type="module"을 이용하여 각 js 파일들을 관리 하였습니다
      ![menu](https://user-images.githubusercontent.com/87363129/159678070-5cedea6f-0a5a-4de6-bd39-2e6e975d0045.gif)
  * Stepper
    * 구현 방법
      * '-', '+' 버튼 클릭시 count의 value 값을 증가,감소 하였습니다
      * 0보다 작아지지 않게 3항 연사자로 조건을 주었습니다 (countValue = countValue > 0 ? countValue - 1 : 0)
      ![step](https://user-images.githubusercontent.com/87363129/159678329-24f5b6ad-daa4-4b57-9a5a-27cff312cd25.gif)
  * Navbar
    * 구현 방법
      * active class을 가지고 있을시 style의 변화를 주었습니다
      * 해당 target을 선택하면 전의 target의 active 클래스를 지우고 클릭한 targat에 active클래스를 생성 하였습니다
      ![navbar](https://user-images.githubusercontent.com/87363129/159678342-39e17330-0cce-4f92-afb8-83c44dd44c94.gif)
  * DropMenu
    * 구현 방법
      * List을 클릭시 class를 주어 list의 목록들을 보여주도록 구현 하였습니다
      * list의 목록이 선택이 되어야 버튼의 속성에 "disabled"을 제거 하고, 버튼을 활성화 하였습니다
      ![drop](https://user-images.githubusercontent.com/87363129/159678359-80cddc0e-d212-4c76-aa25-9a3eef6eb205.gif)
  * SidebarMenu
    * 구현 방법
      * "active" 클래스의 여부에 따라 style에 변화를 주었습니다
      *  ![side](https://user-images.githubusercontent.com/87363129/159678372-99a770da-25dc-4ec7-b945-daa02a9c576d.gif)
  * DropMenu
    * 구현 방법
      * html의 data-type을 이용하여 해당 type별로 filter가 되도록 구현 하였습니다
      * 해당 카테고리를 클릭시, data-type을 비교해 해당 type만 노출되도록 하였습니다
      ![filter](https://user-images.githubusercontent.com/87363129/159678391-e765c09e-a2b9-4f61-9c2b-0e0299e6806b.gif)
  * 3D-Slide
    * 구현 방법
      * 버튼 클릭시 "next" 클래스를 가지고 있는지 includes메소드을 이용하여 이전,다음 슬라이드를 구분하였습니다
      * "-webkit-box-reflect", "transform: translateZ", "transform-style: preserve-3d"을 이용해 3D형태로 slide를 스타일링 하였습니다
      * 원하는 target을 선택시, "forEach"의 "index"와, css에 "card.setAttribute('style', `--i:${index}`)"의 "i"을 이용해 해당 "i * index"만큼 "rotateY"가 되도록 구현 하였습니다
      * ![slide](https://user-images.githubusercontent.com/87363129/159678444-5776ba4d-c980-4842-bd2d-4850f289f84a.gif)
 
  * Parallax
    * 구현 방법
      * scroll 이벤트시 window.scrollY을 이용해 현재 좌표의Y을 구했습니다
      * 현재 Y좌표의 맞게 각 이미지들의 위치 값을 재설정 하였습니다
      * ![parllax](https://user-images.githubusercontent.com/87363129/159678495-52356edf-5cfb-433a-85c6-f02d0dc00e04.gif)

      
