const cardData = [
  {
    "brand": "스톤아일랜드",
    "url": "https://www.musinsa.com/app/goods/3193100?loc=goods_rank",
    "name": "남성 와펜 패치 클래식 플리스 스웨트셔츠 - 블랙 / 101563051A0029",
    "rank": "1",
    "price": "490,000원329,000원",
    "img": "https://image.msscdn.net/images/goods_img/20230330/3193100/3193100_16855151060930_125.jpg"
  },
  {
    "brand": "폴로 랄프 로렌",
    "url": "https://www.musinsa.com/app/goods/2406910?loc=goods_rank",
    "name": "커스텀 핏 리넨 셔츠 - 네이비",
    "rank": "2",
    "price": "239,000원",
    "img": "https://image.msscdn.net/images/goods_img/20220308/2406910/2406910_2_125.jpg"
  },
  {
    "brand": "캘빈클라인 진",
    "url": "https://www.musinsa.com/app/goods/1763157?loc=goods_rank",
    "name": "5color 남 레귤러핏 인스티튜셔널 로고 반팔 티셔츠 (화이트,블랙,미드그레이,그레이,베이지) J321612",
    "rank": "3",
    "price": "52,000원46,800원",
    "img": "https://image.msscdn.net/images/goods_img/20210126/1763157/1763157_16855123596021_125.jpg"
  },
  {
    "brand": "폴로 랄프 로렌",
    "url": "https://www.musinsa.com/app/goods/2406911?loc=goods_rank",
    "name": "커스텀 핏 리넨 셔츠 - 화이트",
    "rank": "4",
    "price": "239,000원",
    "img": "https://image.msscdn.net/images/goods_img/20220308/2406911/2406911_2_125.jpg"
  },
  {
    "brand": "페플",
    "url": "https://www.musinsa.com/app/goods/3196754?loc=goods_rank",
    "name": "[패키지] 뉴웨이브 크루즈 + 에잇티즈 반팔 티셔츠 2PACK (YKST1401+YKST1400)",
    "rank": "5",
    "price": "71,000원35,900원",
    "img": "https://image.msscdn.net/images/goods_img/20230331/3196754/3196754_16805699319891_125.jpg"
  },
  {
    "brand": "수아레",
    "url": "https://www.musinsa.com/app/goods/2575342?loc=goods_rank",
    "name": "케이블 카라 반팔 니트 - 6 COLOR",
    "rank": "6",
    "price": "59,000원39,900원",
    "img": "https://image.msscdn.net/images/goods_img/20220523/2575342/2575342_16804878956538_125.jpg"
  },
  {
    "brand": "세터",
    "url": "https://www.musinsa.com/app/goods/3338188?loc=goods_rank",
    "name": "위켄드 링클 오가닉 하프 셔츠 리조트 블랙",
    "rank": "7",
    "price": "169,000원143,650원",
    "img": "https://image.msscdn.net/images/goods_img/20230601/3338188/3338188_16855926186648_125.jpg"
  },
  {
    "brand": "폴로 랄프 로렌",
    "url": "https://www.musinsa.com/app/goods/1498092?loc=goods_rank",
    "name": "커스텀 슬림핏 메시 폴로 셔츠 - 블랙",
    "rank": "8",
    "price": "169,000원",
    "img": "https://image.msscdn.net/images/goods_img/20200626/1498092/1498092_2_125.jpg"
  },
  {
    "brand": "마리떼",
    "url": "https://www.musinsa.com/app/goods/2377269?loc=goods_rank",
    "name": "W CLASSIC LOGO TEE white",
    "rank": "9",
    "price": "45,000원40,500원",
    "img": "https://image.msscdn.net/images/goods_img/20220222/2377269/2377269_16777177260753_125.jpg"
  },
  {
    "brand": "폴로 랄프 로렌",
    "url": "https://www.musinsa.com/app/goods/1201415?loc=goods_rank",
    "name": "커스텀 슬림 핏 코튼 티셔츠 - 블랙",
    "rank": "10",
    "price": "119,000원",
    "img": "https://image.msscdn.net/images/goods_img/20191024/1201415/1201415_2_125.jpg"
  },
  {
    "brand": "무신사 스탠다드",
    "url": "https://www.musinsa.com/app/goods/2034137?loc=goods_rank",
    "name": "릴렉스 핏 크루 넥 반팔 티셔츠 2팩",
    "rank": "11",
    "price": "31,800원",
    "img": "https://image.msscdn.net/images/goods_img/20210719/2034137/2034137_1_125.jpg"
  },
  {
    "brand": "커버낫",
    "url": "https://www.musinsa.com/app/goods/1848166?loc=goods_rank",
    "name": "에센셜 쿨 코튼 2-PACK 티셔츠 블랙",
    "rank": "12",
    "price": "49,000원34,300원",
    "img": "https://image.msscdn.net/images/goods_img/20210316/1848166/1848166_16835226072455_125.jpg"
  },
  {
    "brand": "캘빈클라인 진",
    "url": "https://www.musinsa.com/app/goods/2285512?loc=goods_rank",
    "name": "2color 여 슬림핏 인스티튜셔널 로고 반팔 티셔츠 (화이트,블랙) J217960",
    "rank": "13",
    "price": "52,000원46,800원",
    "img": "https://image.msscdn.net/images/goods_img/20211229/2285512/2285512_16805007981654_125.jpg"
  },
  {
    "brand": "스파오",
    "url": "https://www.musinsa.com/app/goods/2272830?loc=goods_rank",
    "name": "(시티보이) 오버핏 옥스포드 셔츠_SPYWD23C01",
    "rank": "14",
    "price": "39,900원37,905원",
    "img": "https://image.msscdn.net/images/goods_img/20211220/2272830/2272830_16830694867670_125.jpg"
  },
  {
    "brand": "코드그라피",
    "url": "https://www.musinsa.com/app/goods/2456003?loc=goods_rank",
    "name": "[SET] CGP 아치 로고 반팔 크루넥 셋업_멜란지그레이",
    "rank": "15",
    "price": "82,900원54,900원",
    "img": "https://image.msscdn.net/images/goods_img/20220330/2456003/2456003_16841436590380_125.jpg"
  },
  {
    "brand": "스파오",
    "url": "https://www.musinsa.com/app/goods/3147313?loc=goods_rank",
    "name": "오픈카라 반팔니트_SPKWD24M01",
    "rank": "16",
    "price": "39,900원37,905원",
    "img": "https://image.msscdn.net/images/goods_img/20230314/3147313/3147313_16817755536301_125.jpg"
  },
  {
    "brand": "무신사 스탠다드",
    "url": "https://www.musinsa.com/app/goods/2035287?loc=goods_rank",
    "name": "[쿨탠다드] 릴렉스 핏 크루 넥 반팔 티셔츠 2팩",
    "rank": "17",
    "price": "39,800원",
    "img": "https://image.msscdn.net/images/goods_img/20210720/2035287/2035287_1_125.jpg"
  },
  {
    "brand": "포터리",
    "url": "https://www.musinsa.com/app/goods/3258593?loc=goods_rank",
    "name": "Comfort Shirt 02 (Dark Navy)",
    "rank": "18",
    "price": "189,000원",
    "img": "https://image.msscdn.net/images/goods_img/20230425/3258593/3258593_16825836411529_125.jpg"
  },
  {
    "brand": "키뮤어",
    "url": "https://www.musinsa.com/app/goods/3143791?loc=goods_rank",
    "name": "[Package][카라+라운드 선택] COOL 린넨 라이크 하프 니트_16 COLOR",
    "rank": "19",
    "price": "68,000원48,900원",
    "img": "https://image.msscdn.net/images/goods_img/20230313/3143791/3143791_16806589017590_125.jpg"
  },
  {
    "brand": "수아레",
    "url": "https://www.musinsa.com/app/goods/3187851?loc=goods_rank",
    "name": "[2PACK] 쿨 니트 카라 OR 라운드 니트 세트",
    "rank": "20",
    "price": "110,000원49,900원",
    "img": "https://image.msscdn.net/images/goods_img/20230329/3187851/3187851_16800852325781_125.jpg"
  }
]
