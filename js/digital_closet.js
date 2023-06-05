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
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023030968029/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tUnisex Double Fox Head Patch Classic Tee-Shirt - Latte",
    "rank": "1",
    "price": "\n판매가\n\t\t\t\t\t\t\t166,250원\n\n원가\n\t\t\t\t\t\t\t\t\t175,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/03/09/GM0023030968029_0_ORGINL_20230309112118145.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023020321405/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\t★NCT 해찬 착용★Unisex Double Fox Head Patch Classic Tee-Shirt - Anthracite",
    "rank": "2",
    "price": "\n판매가\n\t\t\t\t\t\t\t166,250원\n\n원가\n\t\t\t\t\t\t\t\t\t175,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/03/GM0023020321405_0_ORGINL_20230220162040170.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tHOODHOOD",
    "url": "https://www.ssfshop.com//HOODHOOD/GPQA23040668565/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\t🌞황금연휴특가🌞 후드후드 시그니처 로고 반팔티셔츠 아이보리",
    "rank": "3",
    "price": "\n판매가\n\t\t\t\t\t\t\t26,460원\n\n원가\n\t\t\t\t\t\t\t\t\t42,000원\n할인율37%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ORBR/23/04/06/GPQA23040668565_0_ORGINL_20230406153535711.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tami",
    "url": "https://www.ssfshop.com//ami/GM0023010324887/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tCrewneck T-shirt with Ami Heart Embroidery - Black",
    "rank": "4",
    "price": "\n판매가\n\t\t\t\t\t\t\t195,000원\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/03/GM0023010324887_0_ORGINL_20230103204700354.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tami",
    "url": "https://www.ssfshop.com//ami/GM0023010324889/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tShort Sleeve Polo T-Shirt with Ami Heart Embroidery - Black",
    "rank": "5",
    "price": "\n판매가\n\t\t\t\t\t\t\t255,000원\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/03/GM0023010324889_0_ORGINL_20230313130712383.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795203/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tUnisex Fox Head Patch Classic Polo - Black",
    "rank": "6",
    "price": "\n판매가\n\t\t\t\t\t\t\t185,250원\n\n원가\n\t\t\t\t\t\t\t\t\t195,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795203_0_ORGINL_20230303214444928.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023030863534/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tUnisex Fox Head Patch Classic Polo - Beige",
    "rank": "7",
    "price": "\n판매가\n\t\t\t\t\t\t\t185,250원\n\n원가\n\t\t\t\t\t\t\t\t\t195,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/03/08/GM0023030863534_0_ORGINL_20230313153232240.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0022121289083/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tMen Grey Fox Head Patch Classic Tee-Shirt - Black",
    "rank": "8",
    "price": "\n판매가\n\t\t\t\t\t\t\t147,250원\n\n원가\n\t\t\t\t\t\t\t\t\t155,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/22/12/12/GM0022121289083_0_ORGINL_20230303213639305.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tHOODHOOD",
    "url": "https://www.ssfshop.com//HOODHOOD/GPQA23040668563/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\t🌞황금연휴특가🌞 후드후드 시그니처 로고 반팔티셔츠 멜란지화이트",
    "rank": "9",
    "price": "\n판매가\n\t\t\t\t\t\t\t26,460원\n\n원가\n\t\t\t\t\t\t\t\t\t42,000원\n할인율37%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ORBR/23/04/06/GPQA23040668563_0_ORGINL_20230406153531906.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tami",
    "url": "https://www.ssfshop.com//ami/GM0023010324873/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tCrewneck T-shirt with Ami Heart Embroidery - White",
    "rank": "10",
    "price": "\n판매가\n\t\t\t\t\t\t\t195,000원\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/03/GM0023010324873_0_ORGINL_20230104122054490.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023030863526/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tUnisex Fox Head Patch Classic Polo - Deep Blue",
    "rank": "11",
    "price": "\n판매가\n\t\t\t\t\t\t\t185,250원\n\n원가\n\t\t\t\t\t\t\t\t\t195,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/03/08/GM0023030863526_0_ORGINL_20230421163648979.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tami",
    "url": "https://www.ssfshop.com//ami/GM0023013102933/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tCrewneck T-shirt with Ami Heart Embroidery - Vanille",
    "rank": "12",
    "price": "\n판매가\n\t\t\t\t\t\t\t195,000원\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/31/GM0023013102933_0_ORGINL_20230317113222048.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0022121289082/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tMen Fox Head Patch Classic Tee-Shirt - Black",
    "rank": "13",
    "price": "\n판매가\n\t\t\t\t\t\t\t147,250원\n\n원가\n\t\t\t\t\t\t\t\t\t155,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/22/12/12/GM0022121289082_0_ORGINL_20230303213504029.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795205/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tUnisex Chillax Fox Patch Classic Tee-Shirt - White",
    "rank": "14",
    "price": "\n판매가\n\t\t\t\t\t\t\t166,250원\n\n원가\n\t\t\t\t\t\t\t\t\t175,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795205_0_ORGINL_20230217124415269.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tami",
    "url": "https://www.ssfshop.com//ami/GM0023021059109/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\t[한국단독] Boxy T-shirt with Ami Heart Embroidery - Noir",
    "rank": "15",
    "price": "\n판매가\n\t\t\t\t\t\t\t335,000원\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/10/GM0023021059109_0_ORGINL_20230210170128456.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tami",
    "url": "https://www.ssfshop.com//ami/GM0023011853299/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tShort Sleeve Polo T-Shirt with  Ami Heart  Embroidery - Vanille",
    "rank": "16",
    "price": "\n판매가\n\t\t\t\t\t\t\t255,000원\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/18/GM0023011853299_0_ORGINL_20230306151523826.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tHOODHOOD",
    "url": "https://www.ssfshop.com//HOODHOOD/GPQA23040668555/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\t🌞황금연휴특가🌞 후드후드 시그니처 로고 반팔티셔츠 그린",
    "rank": "17",
    "price": "\n판매가\n\t\t\t\t\t\t\t26,460원\n\n원가\n\t\t\t\t\t\t\t\t\t42,000원\n할인율37%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ORBR/23/04/06/GPQA23040668555_0_ORGINL_20230406153514633.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795202/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tUnisex Fox Head Patch Classic Polo - White",
    "rank": "18",
    "price": "\n판매가\n\t\t\t\t\t\t\t185,250원\n\n원가\n\t\t\t\t\t\t\t\t\t195,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795202_0_ORGINL_20230217124408625.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tMaison Kitsuné",
    "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795207/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\tUnisex Chillax Fox Patch Classic Tee-Shirt - Black",
    "rank": "19",
    "price": "\n판매가\n\t\t\t\t\t\t\t166,250원\n\n원가\n\t\t\t\t\t\t\t\t\t175,000원\n할인율5%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795207_0_ORGINL_20230306144812921.jpg"
  },
  {
    "brand": "\n\t\t\t\t\tHOODHOOD",
    "url": "https://www.ssfshop.com//HOODHOOD/GPQA23040668561/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
    "name": "\n\t\t\t\t\t🌞황금연휴특가🌞 후드후드 시그니처 로고 반팔티셔츠 그레이",
    "rank": "20",
    "price": "\n판매가\n\t\t\t\t\t\t\t26,460원\n\n원가\n\t\t\t\t\t\t\t\t\t42,000원\n할인율37%\n",
    "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ORBR/23/04/06/GPQA23040668561_0_ORGINL_20230406153527527.jpg"
  }
]

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
    imgElem.src = card.img;
    imgElem.classList.add("card-img-top");
    imgElem.alt = "Card Image";

    // 카드 본문 요소 생성
    const cardBodyElem = document.createElement("div");
    cardBodyElem.classList.add("card-body");

    // 카드 제목 요소 생성
    const titleElem = document.createElement("h5");
    titleElem.classList.add("card-title");
    titleElem.textContent = card.name;

    // 카드 내용 요소 생성
    const textElem = document.createElement("p");
    textElem.classList.add("card-text");
    textElem.textContent = card.brand;

    // 요소들을 조합하여 카드 요소 완성
    cardBodyElem.appendChild(titleElem);
    cardBodyElem.appendChild(textElem);
    cardElem.appendChild(imgElem);
    cardElem.appendChild(cardBodyElem);

    // closet page에서 각 이미지 클릭 시 detail page로 이동하는 코드
    cardElem.addEventListener("click", function() {
        document.location.href = './detailpage.html';
    });

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
