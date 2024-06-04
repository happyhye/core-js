/* -------------------- */
/* Do While Loop        */
/* -------------------- */


// let i = 10;
// do {
//   console.log(i);
//   i++
// } while(i < 5)


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let num = +prompt('숫자를 입력하세요');

// do {
//   console.log(num);
//   if(num < 0){
//     console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
//     break;
//   }

//   num--;
// } while (num);


// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let cnt = 0;
// do {
//   console.log(cnt++);
// } while (num--);




/* -------------------------------------------------------------------------------- */

// DOM을 살짝 만져보자

let first = document.querySelector('.first');
console.log(first);

// do {
//   first = first.nextSibling; //처음 한바퀴 돌면 #text 출력
// } while (first.nodeType !== document.ELEMENT_NODE);

// function next(node) {
//   do {
//     node = node.nextSibling;
    //처음 한바퀴 돌면 #text 출력
//   } while (node.nodeType !== 1);

//   return node;
// }

// let second = next(first);
//.second

/* -------------------------------------------------------------------------------- */

//second가 잡혔을때 first가 출력될 수 있도록.

function prev(node) {

  if(typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

const prevoius = prev('.second');//.first



function next(node) {

  if(typeof node === 'string') { //타입이 string일때만 실행하라.
    node = document.querySelector(node); // 아래에서 호출하면 querySelector(".first")랑 같음
  }

  do {
      node = node.nextSibling;
    } while(node.nodeType !== 1);

    return node;
}

console.log(next('.first'));




// first의 다음 요소 선택 => .second
// console.log(first.nextElementSibling);