/* ---------------- */
/* Condition        */
/* ---------------- */

// let result = prompt('자바스크립트의 "공식" 이름은 무엇일까요?');
// if (result === 'ECMAScript') {
//   console.log('정답입니다!');
// } else {
//   console.log('모르셨나요? 정답은 ECMAScript 입니다!');
// }

function watchingMovie() {
  // 그 영화 봤니?
  //     ↓
  // Yes | No
  //     | 영화 볼거니?
  //           ↓
  //       Yes | No

  // 영화 봤니?
  let didWatchMovie = confirm('그 영화 봤어?');
  if (didWatchMovie) {
    console.log('그 영화 참 재밌더라!');
  } else {
    let goingToWatchMovie = confirm('영화 볼 거니?');

    if (goingToWatchMovie) {
      console.log('영화 볼 거야');

      let withWho = prompt('누구랑 볼 거야?');
      console.log(withWho);

      if (withWho == 'You') {
        console.log('I Love You');
      } else {
        console.log('왜 나랑 안 봐?');
      }
    } else {
      console.log('나중에 꼭 봐');
    }
  }

  // 영화 볼거니?
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

// let result = didWatchMovie.includes('yes')
// ? '그 영화 참 재밌더라'
//   : '다음에 같이 볼래';

let result = didWatchMovie.includes('yes')
  ? '그 영화 참 재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '언제볼까? 재밌겠다'
    : '그래...';

// 멀티 조건부 연산자 식
