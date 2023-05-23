function toCloset() {
    document.location.href = './closet page.html'
}//홈버튼 클릭 toCloset 함수는 해당 주소로 이동 mainpage에서 div 영역 클릭시 ./closet.html로 이동

function todetailpage(){
    document.location.href = './detailpage.html'
}//closetpage에서 해당 품목 클릭시 자세하게 설명해주는 detail page로 이동

// 카드 추가
// 추가할 카드의 정보 배열
const cardData = [
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 1",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 1",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 2",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 2",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 3",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 3",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 4",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 4",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 5",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 5",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 6",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 6",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 7",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 7",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 8",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 8",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 9",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 9",
    },
    {
        imgSrc: "./../img/img1.png",
        title: "Card Title 10",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        btnText: "Go to Page 10",
    },
];

// 카드를 추가할 부모 요소
const scrollWrap = document.querySelector(".scroll_wrap");

// 카드를 추가하는 함수
function addCard(card) {
    // 카드 요소 생성
    const cardElem = document.createElement("div");
    cardElem.classList.add("card");
    cardElem.style.width = "18rem";

    // 이미지 요소 생성
    const imgElem = document.createElement("img");
    imgElem.src = card.imgSrc;
    imgElem.classList.add("card-img-top");
    imgElem.alt = "Card Image";

    // 카드 본문 요소 생성
    const cardBodyElem = document.createElement("div");
    cardBodyElem.classList.add("card-body");

    // 카드 제목 요소 생성
    const titleElem = document.createElement("h5");
    titleElem.classList.add("card-title");
    titleElem.textContent = card.title;

    // 카드 내용 요소 생성
    const textElem = document.createElement("p");
    textElem.classList.add("card-text");
    textElem.textContent = card.text;

    // 요소들을 조합하여 카드 요소 완성
    cardBodyElem.appendChild(titleElem);
    cardBodyElem.appendChild(textElem);
    cardElem.appendChild(imgElem);
    cardElem.appendChild(cardBodyElem);

    // 카드 요소를 부모 요소에 추가
    scrollWrap.appendChild(cardElem);
}

// 카드 데이터 배열의 각 요소로 카드 요소 추가
cardData.forEach((card) => addCard(card));

const scrollShow = document.querySelector(".scroll_show");

scrollWrap.addEventListener('mousedown', function(event) {
  var initialScrollLeft = scrollWrap.scrollLeft;
  var initialClientX = event.clientX;

  function scrollOnMouseMove(moveEvent) {
    var moveX = moveEvent.clientX - initialClientX;
    scrollShow.scrollLeft = initialScrollLeft - moveX;

    moveEvent.preventDefault();
  }

  function removeMouseMoveListener() {
    document.removeEventListener('mousemove', scrollOnMouseMove);
  }

  document.addEventListener('mouseup', removeMouseMoveListener);
  document.addEventListener('mousemove', scrollOnMouseMove);
});
