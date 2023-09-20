// 학생회관 학과부스
const tagData = [
  { id: 1, name: "무대미술", heart: false },
  { id: 2, name: "메이커즈", heart: false },
  { id: 3, name: "단과대", heart: false },
  { id: 4, name: "인더스트리얼디자인", heart: false },
  { id: 5, name: "마음건강연구회", heart: false },
  { id: 6, name: "지니어스", heart: false },
  { id: 7, name: "품에안고", heart: false },
  { id: 8, name: "스마트정보통신", heart: false },
  { id: 9, name: "상명유람단", heart: false },
  { id: 10, name: "소울로", heart: false },
  { id: 11, name: "디지털만화영상", heart: false },
  { id: 12, name: "다크니스", heart: false },
  { id: 13, name: "혁신사업", heart: false },
  { id: 14, name: "팜므", heart: false },
  { id: 15, name: "소프트웨어", heart: false },
  { id: 16, name: "그린화학공학", heart: false },
  { id: 17, name: "식물식품공학", heart: false },
  { id: 18, name: "건설시스템공학", heart: false },
  { id: 19, name: "요쿡", heart: false },
  { id: 20, name: "Questioners", heart: false },
  { id: 21, name: "그린스마트시티", heart: false },
  { id: 22, name: "시스템반도체공학", heart: false },
  { id: 23, name: "실오라기,클럽씨", heart: false },
  { id: 24, name: "스페이스디자인", heart: false },
  { id: 25, name: "세라믹디자인", heart: false },
  { id: 34, name: "띵작스튜디오", heart: false },
  { id: 35, name: "학생상담센터", heart: false },
]

// 힉생회관 푸드트럭
const tagData_food = [
  { id: 1, name: "부엉이푸드", heart: false },
  { id: 2, name: "타임푸드", heart: false },
  { id: 3, name: "대감님댁", heart: false },
  { id: 4, name: "오레오푸드", heart: false },
  { id: 5, name: "도모도모", heart: false },
  { id: 6, name: "블루라군", heart: false },
  { id: 7, name: "드림", heart: false },
  { id: 8, name: "고깃집", heart: false },
]

// 학생회관 외부부스
const tagData_Out = [
  { id: 33, name: "탕후루", heart: false },
  { id: 31, name: "어더아사", heart: false },
  { id: 27, name: "하이트진로", heart: false },
  { id: 28, name: "질레트", heart: false },
  { id: 29, name: "The터", heart: false },
  { id: 26, name: "러벌스스튜디오", heart: false },
]

// 도서관 외부 부스 정보
const tagData_Out2 = [
  { id: 1, name: "밝은눈안과", heart: false },
  { id: 2, name: "MC섭이네", heart: false },
  { id: 3, name: "유진상회", heart: false },
  { id: 4, name: "겟아웃", heart: false },
]

// 학생회관 동아리 학과 부스
const infoData = [
  { id: 1, tagId: 1, content: "9.25 ~ 9.26 / 12:00 ~ 21:30",explain:"키링 판매, 클럽 상회(두부김치, 동그랑땡, 미숫가루, 분홍소세지)" ,Game: "2000원~5000원" },
  { id: 2, tagId: 2, content:  "9.25 ~ 9.26 / 10:00 ~ 18:00",explain:"핸드페인팅 체험 이벤트", Game: "18000원"},
  { id: 3, tagId: 3, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"시네마(팝콘, 나초, 버터구이 오징어)", Game: "1000원 ~ 3500원"},
  { id: 4, tagId: 4, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"게임 및 사진촬영", Game: "2000원 ~ 10000원"},
  { id: 5, tagId: 5, content: "9.25 ~ 9.26 / 10:00 ~ 16:00" ,explain:"체험형 상담소 및 음료 판매", Game: "2000원 ~ 3000원"},
  { id: 6, tagId: 6, content: "9.25 ~ 9.26 / 10:00 ~ 17:00" ,explain:"VR을 이용한 게임 진행", Game: "5000원"},
  { id: 7, tagId: 7, content: "9.25 ~ 9.26 / 16:00 ~ 17:00" ,explain:"굿즈판매", Game: "1000원 ~ 6000원"},
  { id: 8, tagId: 8, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"밀리터리 컨셉 상회(소세지 야채 볶음, 두부제육김치, 조개미역국,고추장비빔밥)", Game: "5000원 ~ 10000원"},
  { id: 9, tagId: 9, content: "9.25 ~ 9.26 / 15:00 ~ 20:00" ,explain:"한식 상회(칠면조, 미나리전, 오뎅탕, 음료)", Game: "2000원 ~ 10000원"},
  { id: 10, tagId: 10, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"달고나 뽑기", Game: "0원 ~ 3000원"},
  { id: 11, tagId: 11, content: "9.25 ~ 9.26 / 10:00 ~ 18:00" ,explain:"키라키라 메이크업 & 캐리커쳐", Game: "2000원 ~ 4500원"},
  { id: 12, tagId: 12, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"라이브 카페(무알콜 칵테일, 버스킹)", Game: "4500원"},
  { id: 13, tagId: 13, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"사업설명 및 프로그램 체험", Game: "-"},
  { id: 14, tagId: 14, content: "9.25 ~ 9.26 / 10:00 ~ 18:00" ,explain:"패션 전시 및 판매", Game: "3000원 ~ 10000원"},
  { id: 15, tagId: 15, content: "9.25 ~ 9.26 / 13:00 ~ 20:00" ,explain:"공대 컨셉 드레스 코드, 코딩 퀴즈 크로플/아이스크림/음료 판매", Game: "1500원 ~ 5000원"},
  { id: 16, tagId: 16, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"MBTI 소개팅 장터(야채 만두, 군만두, 황도, 야광팔찌)", Game: "1000원 ~ 4000원"},
  { id: 17, tagId: 17, content: "9.25 ~ 9.26 / 16:00 ~ 21:00" ,explain:"산악회 컨셉 상회(김치전, 묵사발, 도토리묵 무침, 골뱅이 무침)", Game: "4000원 ~ 8000원"},
  { id: 18, tagId: 18, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"차린건 쥐뿔도 없지만 컨셉 상회(빙수 판매, 인스팅)", Game: "4000원"},
  { id: 19, tagId: 19, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"포차(야끼소바)", Game: "8000원"},
  { id: 20, tagId: 20, content: "9.25 ~ 9.26 / 16:00 ~ 20:00" ,explain:"문학 컨셉의 장터(콘치즈, 떡꼬치, 팽이버섯전, 우동 육수)", Game: "1000원 ~ 8000원"},
  { id: 21, tagId: 21, content: "9.25 ~ 9.26 / 16:00 ~ 20:00" ,explain:"장터 운영(감자전, 해물파전, 계란말이, 오꼬노미야끼)", Game: "5000원 ~ 12000원"},
  { id: 22, tagId: 20, content: "9.25 ~ 9.26 / 12:00 ~ 19:00" ,explain:"사탕시그널", Game: "500원 ~ 1000원"},
  { id: 23, tagId: 21, content: "9.25 ~ 9.26 / 11:00 ~ 17:00" ,explain:"리사이클 컨셉 키링 판매", Game: "2000원 ~ 5000원"},
  { id: 24, tagId: 20, content: "9.25 ~ 9.26 / 11:00 ~ 18:00" ,explain:"엽서 판매", Game: "1000원 ~ 2000원"},
  { id: 25, tagId: 21, content: "9.25 ~ 9.26 / 09:00 ~ 18:00" ,explain:"플리마켓", Game: "1000원 ~ 20000원"},
  { id: 34, tagId: 20, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"띵작스튜디오 홍보, 홍보물품 증정 및 제품판매", Game: "5000원"},
  { id: 35, tagId: 21, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"설명 및 상품 제공", Game: "-"},
]

// 학생회관 푸드트럭 정보
const infoData_food = [
  { id: 1, tagId: 1, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"닭꼬치", Game: "5000원"},
  { id: 2, tagId: 2, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"회오리감자, 소떡소떡, 핫도그", Game: "4000원 ~ 5000원"},
  { id: 3, tagId: 3, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"닭꼬치", Game: "5000원"},
  { id: 4, tagId: 4, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"오레오츄러스, 오레오아츄", Game: "4000원 ~ 7000원"},
  { id: 5, tagId: 5, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"타코야끼", Game: "6000원"},
  { id: 6, tagId: 6, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"커피, 에이드, 논알콜칵테일", Game: "3500원 ~ 5000원"},
  { id: 7, tagId: 7, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"불초밥, 연어초밥", Game: "12000원 ~ 13000원"},
  { id: 8, tagId: 8, content: "9.25 ~ 9.26 / 12:30 ~ 21:30" ,explain:"스테이크", Game: "10000원 ~ 12000원"},
]
// 학생회관 외부 부스 정보
const infoData_Out = [
  { id: 33, tagId: 33, content: "9.25 ~ 9.26 / 10:00 ~ 소진시",explain:"탕후루 제공(3000개 * 2)", Game: "-" },
  { id: 31, tagId: 31, content: "9.25 ~ 9.26 / 10:00 ~ 21:30" ,explain:"구슬아이스크림 판매", Game: "3500원 ~ 9900원"},
  { id: 27, tagId: 27, content: "9.25 ~ 9.26 / 17:00 ~ 21:00" ,explain:"얼음 + 버킷 제공", Game: "-"},
  { id: 28, tagId: 28, content: "9.25 ~ 9.26 / 10:00 ~ 21:30" ,explain:"제품 제공", Game: "-"},
  { id: 29, tagId: 29, content: "9.25 ~ 9.26 / 10:00 ~ 18:00" ,explain:"미니 게임 및 미니 소품 판매", Game: "1000원 ~ 5000원"},
  { id: 26, tagId: 26, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" ,explain:"사진촬영 및 이벤트 진행", Game: "20000원"},
  
]

// 도서관 외부 부스 정보
const infoData_Out2 = [
  { id: 1, tagId: 1, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" },
  { id: 2, tagId: 2, content: "9.25 ~ 9.26 / 10:00 ~ 21:00" },
  { id: 3, tagId: 3, content: "9.25 ~ 9.26 / 10:00 ~ 22:00" },
  { id: 4, tagId: 4, content: "9.25 ~ 9.26 / 10:00 ~ 24:00" },
  { id: 5, tagId: 5, content: "9.25 ~ 9.26 / 10:00 ~ 20:00" },
  { id: 6, tagId: 6, content: "9.25 ~ 9.26 / 10:00 ~ 21:00" },
]

export {
  tagData,
  tagData_food,
  tagData_Out,
  tagData_Out2,
  infoData,
  infoData_food,
  infoData_Out,
  infoData_Out2,
}
