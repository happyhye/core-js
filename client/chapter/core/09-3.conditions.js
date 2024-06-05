/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 10;
switch(a) {
  case 10 :
    console.log('10입니다');
    break;

  case 11 :
    console.log('11입니다');
    break;

  case 12 :
    console.log('12입니다');
    break;

  default :
  console.log('10, 11, 12가 없습니다');
}



const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch(thisTime) {
  case MORNING :
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH :
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER :
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT :
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT :
  case DAWN :
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}



/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
}
else if(thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
}
else if(thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
}
else if(thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
}
else if(thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */




// 변수에 담는다 => prompt를 통해서 숫자를 입력받게 함 (0~6까지)

/* switch case문을 사용해서
0: 일
1: 월
2: 화
3: 수
4: 목
5: 금
6: 토
*/

// let day = +prompt('0~6 숫자를 입력하세요.');

// switch (day) {
//   case 0: console.log('일요일'); break;
//   case 1: console.log('월요일'); break;
//   case 2: console.log('화요일'); break;
//   case 3: console.log('수요일'); break;
//   case 4: console.log('목요일'); break;
//   case 5: console.log('금요일'); break;
//   case 6: console.log('토요일'); break;
//   default: console.log('숫자를 정확히 입력해주세요.');
// }



// 0~6까지 랜덤 수 받아서 switch문

function getRandom(n) {
  let randomDay = Math.floor(Math.random()*n);
  return randomDay;
}

function getDay(randomDay) {
  console.log(randomDay);

  switch (randomDay) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
    default: console.log('숫자를 정확히 입력해주세요.');
  }
}


// getDay 실행해서 요일 받아옴
// 해당 요일이 토,일 => 주말입니다.   / 나머지 => 평일입니다.

console.clear();

function weekend() {
  const today = getDay(getRandom(7)); //요일 받아옴 (일~월)
  console.log(today);

  if(today.includes('토') || today.includes('일')) {
    return '주말입니다.';
  }
  else {
    return '평일입니다.';
  }
}


function weekend2() {
  const today = getDay(getRandom(7)); //요일 받아옴 (일~월)
  console.log(today);

  // const day = today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
  // return day;

  return today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
}