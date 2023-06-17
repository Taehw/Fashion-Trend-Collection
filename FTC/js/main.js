var main_body = document.getElementById("main_body");
var list_body = document.getElementById("list_body");
var detail_body = document.getElementById("detail_body");
var to_main_btn = document.getElementById('to_main_btn');
var list_title = document.getElementById('list_title');
var musinsa_tab = document.getElementById('musinsa_tab');
var left_btn = document.getElementById('left_btn');
var right_btn = document.getElementById('right_btn');
var rank_area_wrap = document.getElementById('rank_area_wrap');
var rank_area = document.getElementsByClassName('rank_area');
var where_car = 0;    //왼쪽이 보여지는 상태면 0, 오른쪽이 보여지는 상태면 1
var prev_list = 0;
var click_object = 0;
// card set up
var top_3_img_wrap = document.getElementsByClassName('top_3_img_wrap');
var top_3_title = document.getElementsByClassName('top_3_title');
var top_sml_img = document.getElementsByClassName('top_sml_img');
var top_sml_text = document.getElementsByClassName('top_sml_text');
var top_right_sml_img = document.getElementsByClassName('top_right_sml_img');
var top_right_sml_text = document.getElementsByClassName('top_right_sml_text');
var firstTopElement = document.getElementsByClassName("top_8_to_20")[0];
var secondTopElement = document.getElementsByClassName("top_8_to_20")[1];
// detail set up
var list_title = document.getElementById('list_title');
var detail_img = document.getElementById('detail_img');
var detail_text_brand = document.getElementById('detail_text_brand');
var detail_text_title = document.getElementById('detail_text_title');
var detail_text_price = document.getElementById('detail_text_price');
var detail_text_url = document.getElementById('detail_text_url');

window.onload = function () {
    for (var i = 7; i < 20; i++) {
        (function (index) {
            var newDiv = document.createElement("div");
            newDiv.className = "top_right_sml";
            newDiv.onclick = function () {
                toDetailPage(index);
            };
            // 배경 이미지 설정
            var newImg = document.createElement("div");
            newImg.className = "top_right_sml_img";
            newDiv.appendChild(newImg);

            // 텍스트 설정
            var newText = document.createElement("div");
            newText.className = "top_right_sml_text";
            newDiv.appendChild(newText);

            // 적절한 top_8_to_20 클래스 요소에 추가
            if (i >= 7 && i <= 13) {
                firstTopElement.appendChild(newDiv);
            } else if (i >= 14 && i <= 19) {
                secondTopElement.appendChild(newDiv);
            }
        })(i);
    }
}

function toListPage(n) {
    main_body.style.display = "none";
    list_body.style.display = "flex";
    detail_body.style.display = "none";

    if (n == -1) n = prev_list;

    if (n == 0) {
        musinsa_tab.style.display = "flex";
        list_title.innerText = "This is Musinsa Ranking.";
        cardSetUp(0);
        prev_list = 0;
    }
    else if (n == 1) {
        musinsa_tab.style.display = "none";
        list_title.innerText = "This is W_Concept Ranking.";
        cardSetUp(2);
        prev_list = 1;
    }
    else if (n == 2) {
        musinsa_tab.style.display = "none";
        list_title.innerText = "This is SSF_Shop Ranking.";
        cardSetUp(3);
        prev_list = 2;
    }
    else if (n == 4) {
        musinsa_tab.style.display = "flex";
        list_title.innerText = "This is Musinsa Ranking.";
        cardSetUp(1);
        prev_list = 3;
    }
}
function toMainPage() {
    main_body.style.display = "flex";
    list_body.style.display = "none";
    detail_body.style.display = "none";

    carousel_mv(0);
}
function toDetailPage(i) {
    main_body.style.display = "none";
    list_body.style.display = "none";
    detail_body.style.display = "flex";

    click_object = i;
    detailSetUp(prev_list, click_object);
}
function carousel_mv(i) {
    var mv_len = rank_area[0].clientWidth;

    if (where_car == 0) {   //왼쪽 carousel 보여짐
        if (i == 0) { }  //왼쪽 화살표 입력
        else {
            rank_area_wrap.style.transform = 'translateX(' + (-mv_len) + 'px)';
            where_car = 1;
        } //오른쪽 화살표 입력
    } else {   //오른쪽 carousel 보여짐
        if (i == 0) {
            rank_area_wrap.style.transform = 'translateX(' + 0 + 'px)';
            where_car = 0;
        } //왼쪽 화살표 입력
        else { } //오른쪽 화살표 입력
    }
}

function cardSetUp(brand) {
    // 0: musinsa top, 1: musinsa_pants , 2: w_concept, 3: ssf
    var set_data = [];

    if (brand == 0) set_data = mt_cardData;
    else if (brand == 1) set_data = mp_cardData;
    else if (brand == 2) set_data = w_cardData;
    else if (brand == 3) set_data = ssf_cardData;

    for (var i = 0; i < 20; i++) {
        // 상위 3개 데이터 셋업
        if (i < 3) {
            top_3_img_wrap[i].style.backgroundImage = "url(" + set_data[i].img + ")";
            // 제목이 10글자 넘어가면 ...으로 뒤에 붙도록 수정
            top_3_title[i].innerText = truncateString(set_data[i].name);
        }
        // 4위 ~ 7위 데이터 셋업
        else if (i >= 3 && i < 7) {
            top_sml_img[i - 3].style.backgroundImage = "url(" + set_data[i].img + ")";
            top_sml_text[i - 3].innerText = (i + 1) + "." + truncateString(set_data[i].name);
        }
        // 8위 ~ 20위 데이터 셋업
        else if (i >= 7) {
            top_right_sml_img[i - 7].style.backgroundImage = "url(" + set_data[i].img + ")";
            top_right_sml_text[i - 7].innerText = (i + 1) + "." + truncateString(set_data[i].name);
        }
    }
}
function truncateString(str) {
    if (str.length > 10) {
        return str.substring(0, 10) + "...";
    } else {
        return str;
    }
}
// 0: 무신사 상의, 1: w_concept, 2: ssf, 3: 무신사 하의
function detailSetUp(n, m) {
    console.log(n, m);

    var set_data = [];

    if (n == 0) set_data = mt_cardData;
    else if (n == 1) set_data = w_cardData;
    else if (n == 2) set_data = ssf_cardData;
    else if (n == 3) set_data = mp_cardData;

    list_title.innerText = set_data[m].name;
    detail_img.style.backgroundImage = 'url(' + set_data[m].img + ')';
    detail_text_brand.innerText = set_data[m].brand;
    detail_text_title.innerText = set_data[m].name;
    detail_text_price.innerText = set_data[m].price;

    detail_text_url.onclick=(function(){
        window.open(set_data[m].url);
    });
}


//musinsa top data
const mt_cardData = [
    {
        "brand": "엠엔지유",
        "url": "https://www.musinsa.com/app/goods/3345274?loc=goods_rank",
        "name": "할로윈 프린트 티셔츠 [그레이]",
        "rank": "1",
        "price": "정가: 68,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230603/3345274/3345274_16857554697989_125.jpg"
    },
    {
        "brand": "톰브라운",
        "url": "https://www.musinsa.com/app/goods/3196475?loc=goods_rank",
        "name": "남성 RWB 포켓 트리밍 반소매 티셔츠 - 네이비 / MJS010A01454415",
        "rank": "2",
        "price": "정가: 660,000원, 할인가: 297,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230331/3196475/3196475_16855950778595_125.jpg"
    },
    {
        "brand": "톰브라운",
        "url": "https://www.musinsa.com/app/goods/3196494?loc=goods_rank",
        "name": "남성 텍스처 코튼 스트라이프 반소매 티셔츠 - 네이비 / MJS204AJ0046415",
        "rank": "3",
        "price": "정가: 980,000원, 할인가: 298,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230331/3196494/3196494_16855950348863_125.jpg"
    },
    {
        "brand": "폴로 랄프 로렌",
        "url": "https://www.musinsa.com/app/goods/1498092?loc=goods_rank",
        "name": "커스텀 슬림핏 메시 폴로 셔츠 - 블랙",
        "rank": "4",
        "price": "정가: 169,000원",
        "img": "https://image.msscdn.net/images/goods_img/20200626/1498092/1498092_2_125.jpg"
    },
    {
        "brand": "엘리메노",
        "url": "https://www.musinsa.com/app/goods/3341803?loc=goods_rank",
        "name": "[2PACK] EL 스트리트 아트워크 오버핏 반팔티 2종 2PACK",
        "rank": "5",
        "price": "정가: 84,000원, 할인가: 39,900원",
        "img": "https://image.msscdn.net/images/goods_img/20230601/3341803/3341803_16856185623132_125.jpg"
    },
    {
        "brand": "톰브라운",
        "url": "https://www.musinsa.com/app/goods/3196461?loc=goods_rank",
        "name": "여성 클래식 코튼 피케 릴렉스 핏 센터 백 스트라이프 반소매 티셔츠 - 네이비 / FJS013A00050415",
        "rank": "6",
        "price": "정가: 710,000원, 할인가: 375,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230331/3196461/3196461_16855951277990_125.jpg"
    },
    {
        "brand": "파르티멘토",
        "url": "https://www.musinsa.com/app/goods/3341871?loc=goods_rank",
        "name": "스트라이프 풋볼 티 블랙",
        "rank": "7",
        "price": "정가: 37,400원, 할인가: 29,900원",
        "img": "https://image.msscdn.net/images/goods_img/20230601/3341871/3341871_16859266992764_125.jpg"
    },
    {
        "brand": "제이더블유엔더슨",
        "url": "https://www.musinsa.com/app/goods/3183906?loc=goods_rank",
        "name": "남성 앵커 로고 패치 반소매 티셔츠 - 블랙 / JT0061PG0772999 - 블랙 / JT0061PG0772999",
        "rank": "8",
        "price": "175,000원, 할인가: 82,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230328/3183906/3183906_16856995453738_125.jpg"
    },
    {
        "brand": "허그본",
        "url": "https://www.musinsa.com/app/goods/2690691?loc=goods_rank",
        "name": "무지 머슬핏 반팔 7컬러",
        "rank": "9",
        "price": "정가: 22,000원",
        "img": "https://image.msscdn.net/images/goods_img/20220801/2690691/2690691_1_125.jpg"
    },
    {
        "brand": "그레일즈",
        "url": "https://www.musinsa.com/app/goods/3318785?loc=goods_rank",
        "name": "3D OVAL LOGO CROP T-SHIRTS [BLACK]",
        "rank": "10",
        "price": "정가: 59,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230523/3318785/3318785_16855123428903_125.png"
    },
    {
        "brand": "무신사 스탠다드",
        "url": "https://www.musinsa.com/app/goods/2034137?loc=goods_rank",
        "name": "릴렉스 핏 크루 넥 반팔 티셔츠 2팩",
        "rank": "11",
        "price": "정가: 31,800원",
        "img": "https://image.msscdn.net/images/goods_img/20210719/2034137/2034137_1_125.jpg"
    },
    {
        "brand": "메종 마르지엘라",
        "url": "https://www.musinsa.com/app/goods/2784043?loc=goods_rank",
        "name": "남성 4 스티치 풀오버 니트 - 블랙 / SI1HA0012S17781900F",
        "rank": "12",
        "price": "정가: 1,260,000원, 할인가: 504,000원",
        "img": "https://image.msscdn.net/images/goods_img/20220913/2784043/2784043_1_125.jpg"
    },
    {
        "brand": "수아레",
        "url": "https://www.musinsa.com/app/goods/3187851?loc=goods_rank",
        "name": "[2PACK] 쿨 니트 카라 OR 라운드 니트 세트",
        "rank": "13",
        "price": "정가: 110,000원, 할인가: 49,900원",
        "img": "https://image.msscdn.net/images/goods_img/20230329/3187851/3187851_16800852325781_125.jpg"
    },
    {
        "brand": "커버낫",
        "url": "https://www.musinsa.com/app/goods/1848166?loc=goods_rank",
        "name": "에센셜 쿨 코튼 2-PACK 티셔츠 블랙",
        "rank": "14",
        "price": "정가: 49,000원 할인가: 34,300원",
        "img": "https://image.msscdn.net/images/goods_img/20210316/1848166/1848166_16835226072455_125.jpg"
    },
    {
        "brand": "아페쎄",
        "url": "https://www.musinsa.com/app/goods/3199437?loc=goods_rank",
        "name": "여성 티나 로고 맨투맨 - 네이비 / COEZDF27561IAJ",
        "rank": "15",
        "price": "정가: 319,000원, 할인가: 110,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230331/3199437/3199437_16854989613835_125.jpg"
    },
    {
        "brand": "아웃스탠딩",
        "url": "https://www.musinsa.com/app/goods/2540678?loc=goods_rank",
        "name": "LIFE IS TEE_SURF RIDE TEE_CHARCOAL",
        "rank": "16",
        "price": "정가: 45,000원, 할인가: 38,250원",
        "img": "https://image.msscdn.net/images/goods_img/20220504/2540678/2540678_16844804590988_125.jpg"
    },
    {
        "brand": "톰브라운",
        "url": "https://www.musinsa.com/app/goods/3196740?loc=goods_rank",
        "name": "여성 미디움 웨이트 저지 엔지니어드 4 바 오버사이즈 티셔츠 - 네이비 / FJS066A06221415",
        "rank": "17",
        "price": "정가: 990,000원, 할인가: 523,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230331/3196740/3196740_16855949716486_125.jpg"
    },
    {
        "brand": "지오다노",
        "url": "https://www.musinsa.com/app/goods/3200626?loc=goods_rank",
        "name": "013502 코튼 피케 폴로 반팔 티셔츠_23color",
        "rank": "18",
        "price": "정가: 24,800원, 할인가: 22,300원",
        "img": "https://image.msscdn.net/images/goods_img/20230403/3200626/3200626_16804858896645_125.png"
    },
    {
        "brand": "수아레",
        "url": "https://www.musinsa.com/app/goods/2575342?loc=goods_rank",
        "name": "케이블 카라 반팔 니트 - 6 COLOR",
        "rank": "19",
        "price": "정가: 59,000원 할인가: 39,900원",
        "img": "https://image.msscdn.net/images/goods_img/20220523/2575342/2575342_16804878956538_125.jpg"
    },
    {
        "brand": "랩12",
        "url": "https://www.musinsa.com/app/goods/1031260?loc=goods_rank",
        "name": "23S/S 오버핏 피케티셔츠 (블랙)",
        "rank": "20",
        "price": "정가: 42,000원 할인가: 39,900원",
        "img": "https://image.msscdn.net/images/goods_img/20190430/1031260/1031260_16801554495460_125.jpg"
    }
]
//musinsa pants data
const mp_cardData = [
    {
        "brand": "코드그라피",
        "url": "https://www.musinsa.com/app/goods/3141395?loc=goods_rank",
        "name": "[패키지][써머ver] 쿨 나일론 스트링 팬츠",
        "rank": "1",
        "price": "정가: 73,900원, 할인가: 59,900원",
        "img": "https://image.msscdn.net/images/goods_img/20230310/3141395/3141395_16831608210577_125.jpg"
    },
    {
        "brand": "수아레",
        "url": "https://www.musinsa.com/app/goods/1924274?loc=goods_rank",
        "name": "린넨 라이크 세미 와이드 밴딩 팬츠 세트",
        "rank": "2",
        "price": "정가: 66,000원, 할인가: 49,900원",
        "img": "https://image.msscdn.net/images/goods_img/20210428/1924274/1924274_16807584621436_125.jpg"
    },
    {
        "brand": "아디다스",
        "url": "https://www.musinsa.com/app/goods/3262223?loc=goods_rank",
        "name": "BB 트랙 팬츠 - 블랙 / IK9152",
        "rank": "3",
        "price": "정가: 109,000원",
        "img": "https://image.msscdn.net/images/goods_img/20230426/3262223/3262223_16830139888417_125.jpg"
    },
    {
        "brand": "제로",
        "url": "https://www.musinsa.com/app/goods/1926048?loc=goods_rank",
        "name": "Deep One Tuck Sweat Shorts [Grey]",
        "rank": "4",
        "price": "정가: 32,000원, 할인가: 28,800원",
        "img": "https://image.msscdn.net/images/goods_img/20210428/1926048/1926048_1_125.jpg"
    },
    {
        "brand": "제로",
        "url": "https://www.musinsa.com/app/goods/1551840?loc=goods_rank",
        "name": "Deep One Tuck Sweat Pants [Grey]",
        "rank": "5",
        "price": "정가: 39,000원",
        "img": "https://image.msscdn.net/images/goods_img/20200818/1551840/1551840_1_125.jpg"
    },
    {
        "brand": "어반드레스",
        "url": "https://www.musinsa.com/app/goods/3109089?loc=goods_rank",
        "name": "real wide cargo pants BLACK",
        "rank": "6",
        "price": "정가: 64,000원, 할인가: 23,040원",
        "img": "https://image.msscdn.net/images/goods_img/20230227/3109089/3109089_16777223616742_125.jpg"
    },
    {
        "brand": "굿라이프웍스",
        "url": "https://www.musinsa.com/app/goods/3129951?loc=goods_rank",
        "name": "[여름 경량소재] 와이드 스트링 CN 교직물 카고 팬츠 카키",
        "rank": "7",
        "price": "정가: 49,800원, 할인가: 39,800원",
        "img": "https://image.msscdn.net/images/goods_img/20230307/3129951/3129951_16826501525028_125.jpg"
    },
    {
        "brand": "엑스톤즈",
        "url": "https://www.musinsa.com/app/goods/2789111?loc=goods_rank",
        "name": "XP127 셔링 카고 팬츠 (KHAKI)",
        "rank": "8",
        "price": "정가: 99,000원, 할인가: 84,150원",
        "img": "https://image.msscdn.net/images/goods_img/20220914/2789111/2789111_16825652792501_125.jpg"
    },
    {
        "brand": "수아레",
        "url": "https://www.musinsa.com/app/goods/2592084?loc=goods_rank",
        "name": "린넨 데님 세미 와이드 밴딩 팬츠 - 3 COLOR",
        "rank": "9",
        "price": "정가: 59,000원, 할인가: 39,900원",
        "img": "https://image.msscdn.net/images/goods_img/20220531/2592084/2592084_16769432132993_125.jpg"
    },
    {
        "brand": "시그니처",
        "url": "https://www.musinsa.com/app/goods/3314689?loc=goods_rank",
        "name": "[2PACK]쿨 썸머 크로스턱 와이드 슬랙스[4colors]",
        "rank": "10",
        "price": "정가: 115,000원, 할인가: 42,500원",
        "img": "https://image.msscdn.net/images/goods_img/20230522/3314689/3314689_16847409870850_125.jpg"
    },
    {
        "brand": "무신사 스탠다드",
        "url": "https://www.musinsa.com/app/goods/1989228?loc=goods_rank",
        "name": "[쿨탠다드] 와이드 히든 밴딩 슬랙스 [블랙]",
        "rank": "11",
        "price": "정가: 43,900원, 할인가: 37,290원",
        "img": "https://image.msscdn.net/images/goods_img/20210609/1989228/1989228_4_125.jpg"
    },
    {
        "brand": "가까이 유니언즈",
        "url": "https://www.musinsa.com/app/goods/2112061?loc=goods_rank",
        "name": "원턱 와이드 스웨트팬츠 블랙",
        "rank": "12",
        "price": "정가: 52,000원, 할인가: 36,400원",
        "img": "https://image.msscdn.net/images/goods_img/20210906/2112061/2112061_1_125.jpg"
    },
    {
        "brand": "그라미치",
        "url": "https://www.musinsa.com/app/goods/732703?loc=goods_rank",
        "name": "루즈테이퍼드 팬츠 Olive",
        "rank": "13",
        "price": "129,000원, 할인가: 122,600원",
        "img": "https://image.msscdn.net/images/goods_img/20180309/732703/732703_16807554066640_125.jpg"
    },
    {
        "brand": "엑스톤즈",
        "url": "https://www.musinsa.com/app/goods/3043508?loc=goods_rank",
        "name": "XP138 파스텔 데님 카고 팬츠 (PINK)",
        "rank": "14",
        "price": "정가: 89,000원, 할인가: 75,650원",
        "img": "https://image.msscdn.net/images/goods_img/20230127/3043508/3043508_16756679025104_125.jpg"
    },
    {
        "brand": "토피",
        "url": "https://www.musinsa.com/app/goods/3316986?loc=goods_rank",
        "name": "[2PACK] SL01 섬머 데님 와이드 팬츠 (7 COLOURS)",
        "rank": "15",
        "price": "정가: 98,000원, 할인가: 68,600원",
        "img": "https://image.msscdn.net/images/goods_img/20230523/3316986/3316986_16859325333777_125.jpg"
    },
    {
        "brand": "무신사 스탠다드",
        "url": "https://www.musinsa.com/app/goods/3134728?loc=goods_rank",
        "name": "[쿨탠다드] 우먼즈 세미 벌룬 히든 밴딩 슬랙스 [블랙]",
        "rank": "16",
        "price": "정가: 47,900원",
        "img": "https://image.msscdn.net/images/goods_img/20230309/3134728/3134728_16817914268780_125.jpg"
    },
    {
        "brand": "무신사 스탠다드",
        "url": "https://www.musinsa.com/app/goods/3153802?loc=goods_rank",
        "name": "쿨링 딥 턱 와이드 밴딩 팬츠 [블랙]",
        "rank": "17",
        "price": "정가: 43,900원",
        "img": "https://image.msscdn.net/images/goods_img/20230316/3153802/3153802_16831020519373_125.jpg"
    },
    {
        "brand": "키뮤어",
        "url": "https://www.musinsa.com/app/goods/2441851?loc=goods_rank",
        "name": "투턱 버뮤다 에드 데님 쇼츠_4 COLOR",
        "rank": "18",
        "price": "정가: 41,900원, 할인가: 39,900원",
        "img": "https://image.msscdn.net/images/goods_img/20220324/2441851/2441851_16806896291904_125.jpg"
    },
    {
        "brand": "제로",
        "url": "https://www.musinsa.com/app/goods/1926034?loc=goods_rank",
        "name": "Deep One Tuck Sweat Shorts [Black]",
        "rank": "19",
        "price": "정가: 32,000원",
        "img": "https://image.msscdn.net/images/goods_img/20210428/1926034/1926034_1_125.jpg"
    },
    {
        "brand": "브렌슨",
        "url": "https://www.musinsa.com/app/goods/1446775?loc=goods_rank",
        "name": "[패키지] 미니멀 트레이닝 essential 반바지 (롱 기장 버전 추가)",
        "rank": "20",
        "price": "정가: 44,800원, 할인가: 33,900원",
        "img": "https://image.msscdn.net/images/goods_img/20200514/1446775/1446775_16792886713712_125.jpg"
    }
]
//w_concept data
const w_cardData = [
    {
        "rank": 1,
        "brand": "ISLAND SLIPPER",
        "url": "https://www.wconcept.co.kr/Product/301664372?rccode=pc_topseller",
        "name": "PT203SL-TPTN",
        "price": "정가: 125,685원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/72/301664372.jpg"
    },
    {
        "rank": 2,
        "brand": "ISLAND SLIPPER",
        "url": "https://www.wconcept.co.kr/Product/301664370?rccode=pc_topseller",
        "name": "PT203SL-PNCG",
        "price": "정가: 125,685원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/70/301664370_HD54319.jpg"
    },
    {
        "rank": 3,
        "brand": "NEWBALANCE",
        "url": "https://www.wconcept.co.kr/Product/301563996?rccode=pc_topseller",
        "name": "530 스니커즈 MR530KA",
        "price": "정가: 199,000원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/96/301563996_XJ82310.jpg"
    },
    {
        "rank": 4,
        "brand": "ONITSUKA TIGER",
        "url": "https://www.wconcept.co.kr/Product/301824533?rccode=pc_topseller",
        "name": "멕시코 66 VIN SD 1183C015_101",
        "price": "정가: 220,000원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/33/301824533.jpg?RS=384"
    },
    {
        "rank": 5,
        "brand": "CPGN",
        "url": "https://www.wconcept.co.kr/Product/301654812?rccode=pc_topseller",
        "name": "Dont Cry Teddy 피그먼트 반팔티 스모크블랙",
        "price": "정가: 31,680원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/12/301654812.jpg?RS=384"
    },
    {
        "rank": 6,
        "brand": "NEWBALANCE",
        "url": "https://www.wconcept.co.kr/Product/301464696?rccode=pc_topseller",
        "name": "[뉴발란스] 530 스니커즈 MR530SG",
        "price": "정가: 169,000원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/96/301464696_TV41639.jpg?RS=384"
    },
    {
        "rank": 7,
        "brand": "MINIMAL PROJECT",
        "url": "https://www.wconcept.co.kr/Product/300984192?rccode=pc_topseller",
        "name": "로버스트 헤비 오버핏 반팔티셔츠 MST127 / 8color",
        "price": "정가: 19,800원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/92/300984192.jpg?RS=384"
    },
    {
        "rank": 8,
        "brand": "47brand",
        "url": "https://www.wconcept.co.kr/Product/302246355?rccode=pc_topseller",
        "name": "MLB모자 47브랜드 LA다저스 스몰로고 볼캡",
        "price": "정가: 26,010원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/55/302246355.jpg?RS=300"
    },
    {
        "rank": 9,
        "brand": "RAWROW",
        "url": "https://www.wconcept.co.kr/Product/302701613?rccode=pc_topseller",
        "name": "스트링 백팩 750 ep.2 Black",
        "price": "정가: 82,863원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/13/302701613.jpg?RS=300"
    },
    {
        "rank": 10,
        "brand": "NIKE",
        "url": "https://www.wconcept.co.kr/Product/301563627?rccode=pc_topseller",
        "name": "[DX5025-100] U NK NSW EVERYDAY ESSENTIAL CR",
        "price": "정가: 12,500원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/27/301563627.jpg?RS=300"
    },
    {
        "rank": 11,
        "brand": "MAC MOC",
        "url": "https://www.wconcept.co.kr/Product/302874091?rccode=pc_topseller",
        "name": "테라 남여공용 글레디에이터 피셔맨 샌들 [Tera 5Color 5Cm]",
        "price": "정가: 64,400원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/91/302874091_UD53708.jpg?RS=300"
    },
    {
        "rank": 12,
        "brand": "FLUKE",
        "url": "https://www.wconcept.co.kr/Product/301221211?rccode=pc_topseller",
        "name": "플루크 캠퍼밴 투어 피그먼트 반팔티셔츠 FST710 / 4color",
        "price": "정가: 21,800원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/11/301221211.jpg?RS=300"
    },
    {
        "rank": 13,
        "brand": "NIKE",
        "url": "https://www.wconcept.co.kr/Product/301615738?rccode=pc_topseller",
        "name": "[DX5089-103] U NK NSW EVERYDAY ESSENTIAL CR",
        "price": "정가: 11,000원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/38/301615738.jpg?RS=300"
    },
    {
        "rank": 14,
        "brand": "MIND BRIDGE",
        "url": "https://www.wconcept.co.kr/Product/302522439?rccode=pc_topseller",
        "name": "[쿨]테이퍼드쿨맥스밴딩팬츠 MXPT3111",
        "price": "정가: 62,910원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/39/302522439_GG94486.jpg?RS=300"
    },
    {
        "rank": 15,
        "brand": "ONITSUKA TIGER",
        "url": "https://www.wconcept.co.kr/Product/301824535?rccode=pc_topseller",
        "name": "멕시코 66 VIN SD 1183C015_200",
        "price": "정가: 220,000원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/35/301824535.jpg?RS=300"
    },
    {
        "rank": 16,
        "brand": "OOFOS",
        "url": "https://www.wconcept.co.kr/Product/301289213?rccode=pc_topseller",
        "name": "OOAHH BLACK - 슬리퍼 블랙",
        "price": "정가: 69,000원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/13/301289213.jpg?RS=300"
    },
    {
        "rank": 17,
        "brand": "ISLAND SLIPPER",
        "url": "https://www.wconcept.co.kr/Product/301664377?rccode=pc_topseller",
        "name": "PT203-CCS",
        "price": "정가: 125,685원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/77/301664377.jpg?RS=300"
    },
    {
        "rank": 18,
        "brand": "Josepht",
        "url": "https://www.wconcept.co.kr/Product/300815500?rccode=pc_topseller",
        "name": "Smith",
        "price": "정가: 94,050원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/00/300815500.jpg?RS=300"
    },
    {
        "rank": 19,
        "brand": "Moderment",
        "url": "https://www.wconcept.co.kr/Product/300995966?rccode=pc_topseller",
        "name": "[세트패키지] 유틸리티 하프팬츠 (6color)",
        "price": "정가: 39,510원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/66/300995966_GE79109.jpg?RS=300"
    },
    {
        "rank": 20,
        "brand": "BATTENWEAR",
        "url": "https://www.wconcept.co.kr/Product/302200937?rccode=pc_topseller",
        "name": "Scout Anorak - Green",
        "price": "정가: 344,500원",
        "img": "https://product-image.wconcept.co.kr/productimg/image/img1/37/302200937.jpg?RS=300"
    },
]
// SSF_data
const ssf_cardData = [
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
        "brand": "\n\t\t\t\t\tami",
        "url": "https://www.ssfshop.com//ami/GM0023010324887/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tCrewneck T-shirt with Ami Heart Embroidery - Black",
        "rank": "3",
        "price": "\n판매가\n\t\t\t\t\t\t\t195,000원\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/03/GM0023010324887_0_ORGINL_20230103204700354.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tami",
        "url": "https://www.ssfshop.com//ami/GM0023010324889/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tShort Sleeve Polo T-Shirt with Ami Heart Embroidery - Black",
        "rank": "4",
        "price": "\n판매가\n\t\t\t\t\t\t\t255,000원\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/03/GM0023010324889_0_ORGINL_20230313130712383.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tMaison Kitsuné",
        "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0022121289083/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tMen Grey Fox Head Patch Classic Tee-Shirt - Black",
        "rank": "5",
        "price": "\n판매가\n\t\t\t\t\t\t\t147,250원\n\n원가\n\t\t\t\t\t\t\t\t\t155,000원\n할인율5%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/22/12/12/GM0022121289083_0_ORGINL_20230303213639305.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tami",
        "url": "https://www.ssfshop.com//ami/GM0023010324873/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tCrewneck T-shirt with Ami Heart Embroidery - White",
        "rank": "6",
        "price": "\n판매가\n\t\t\t\t\t\t\t195,000원\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/03/GM0023010324873_0_ORGINL_20230104122054490.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tMaison Kitsuné",
        "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0022121289082/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tMen Fox Head Patch Classic Tee-Shirt - Black",
        "rank": "7",
        "price": "\n판매가\n\t\t\t\t\t\t\t147,250원\n\n원가\n\t\t\t\t\t\t\t\t\t155,000원\n할인율5%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/22/12/12/GM0022121289082_0_ORGINL_20230303213504029.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tMaison Kitsuné",
        "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795205/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tUnisex Chillax Fox Patch Classic Tee-Shirt - White",
        "rank": "8",
        "price": "\n판매가\n\t\t\t\t\t\t\t166,250원\n\n원가\n\t\t\t\t\t\t\t\t\t175,000원\n할인율5%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795205_0_ORGINL_20230217124415269.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tMaison Kitsuné",
        "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795207/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tUnisex Chillax Fox Patch Classic Tee-Shirt - Black",
        "rank": "9",
        "price": "\n판매가\n\t\t\t\t\t\t\t166,250원\n\n원가\n\t\t\t\t\t\t\t\t\t175,000원\n할인율5%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795207_0_ORGINL_20230306144812921.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tami",
        "url": "https://www.ssfshop.com//ami/GM0023021059109/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\t[한국단독] Boxy T-shirt with Ami Heart Embroidery - Noir",
        "rank": "10",
        "price": "\n판매가\n\t\t\t\t\t\t\t335,000원\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/10/GM0023021059109_0_ORGINL_20230210170128456.jpg"
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
        "brand": "\n\t\t\t\t\t8 seconds",
        "url": "https://www.ssfshop.com//8-seconds/GM0023030863816/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\t코튼 원턱 밴딩 팬츠 - 카키",
        "rank": "12",
        "price": "\n판매가\n\t\t\t\t\t\t\t39,900원\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/8SBR/23/03/08/GM0023030863816_0_ORGINL_20230413181825266.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tMaison Kitsuné",
        "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795202/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tUnisex Fox Head Patch Classic Polo - White",
        "rank": "13",
        "price": "\n판매가\n\t\t\t\t\t\t\t185,250원\n\n원가\n\t\t\t\t\t\t\t\t\t195,000원\n할인율5%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795202_0_ORGINL_20230217124408625.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tami",
        "url": "https://www.ssfshop.com//ami/GM0023013102933/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tCrewneck T-shirt with Ami Heart Embroidery - Vanille",
        "rank": "14",
        "price": "\n판매가\n\t\t\t\t\t\t\t195,000원\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/31/GM0023013102933_0_ORGINL_20230317113222048.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tBEANPOLE MEN",
        "url": "https://www.ssfshop.com//BEANPOLE-MEN/GM0023021581684/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\t[Essential] 남녀공용 베이직 피케 티셔츠 - 네이비",
        "rank": "15",
        "price": "\n판매가\n\t\t\t\t\t\t\t125,100원\n\n원가\n\t\t\t\t\t\t\t\t\t139,000원\n할인율10%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/BPBR/23/02/15/GM0023021581684_0_ORGINL_20230327140143023.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tJUUN.J",
        "url": "https://www.ssfshop.com//JUUN-J/GM0023051691105/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\t코튼 그래픽 세미오버 숏 슬리브 티셔츠 - 블랙",
        "rank": "16",
        "price": "\n판매가\n\t\t\t\t\t\t\t313,500원\n\n원가\n\t\t\t\t\t\t\t\t\t330,000원\n할인율5%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/05/16/GM0023051691105_0_ORGINL_20230516150716965.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tami",
        "url": "https://www.ssfshop.com//ami/GM0023011853299/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tShort Sleeve Polo T-Shirt with  Ami Heart  Embroidery - Vanille",
        "rank": "17",
        "price": "\n판매가\n\t\t\t\t\t\t\t255,000원\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/01/18/GM0023011853299_0_ORGINL_20230306151523826.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tBEANPOLE MEN",
        "url": "https://www.ssfshop.com//BEANPOLE-MEN/GM0023021581678/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\t[Essential] 남녀공용 베이직 피케 티셔츠 - 블랙",
        "rank": "18",
        "price": "\n판매가\n\t\t\t\t\t\t\t125,100원\n\n원가\n\t\t\t\t\t\t\t\t\t139,000원\n할인율10%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/BPBR/23/02/15/GM0023021581678_0_ORGINL_20230327140102442.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tBEANPOLE MEN",
        "url": "https://www.ssfshop.com//BEANPOLE-MEN/GM0023040661641/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\t하프집업 반팔 맨투맨 - 블랙",
        "rank": "19",
        "price": "\n판매가\n\t\t\t\t\t\t\t143,100원\n\n원가\n\t\t\t\t\t\t\t\t\t159,000원\n할인율10%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/BPBR/23/04/06/GM0023040661641_0_ORGINL_20230421160815429.jpg"
    },
    {
        "brand": "\n\t\t\t\t\tMaison Kitsuné",
        "url": "https://www.ssfshop.com//Maison-Kitsuné/GM0023021795208/good?utag=ref_rank:sale&dspCtgryNo=&brandShopNo=&brndShopId=&leftBrandNM=",
        "name": "\n\t\t\t\t\tUnisex Chillax Fox Patch Classic Tee-Shirt - Navy",
        "rank": "20",
        "price": "\n판매가\n\t\t\t\t\t\t\t166,250원\n\n원가\n\t\t\t\t\t\t\t\t\t175,000원\n할인율5%\n",
        "img": "https://img.ssfshop.com/cmd/LB_500x660/src/https://img.ssfshop.com/goods/ECBR/23/02/17/GM0023021795208_0_ORGINL_20230303214452313.jpg"
    }
]