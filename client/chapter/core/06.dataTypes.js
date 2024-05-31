/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'Hello'; //String literal
const single = 'Hello';
const backtick = `Hello ${10 + 5}`;
console.log(typeof backtick);

// JS는 문자를 독특하게 만들 수도 있음
const str = new String('hello'); //Constructor function
console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150; // number literal
const floatingPointNumber = 10.5;
console.log(typeof NaN);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigint = 123n;
console.log(typeof bigint);

const b = BigInt(111);

// 6. 참(true, yes) 또는 거짓(false, no)
const active = false;
console.log(typeof active);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.clear();

const obj = {
  name: 'tiger',
}; //object literal

console.log(obj);

const newObj = new Object({ name: 'tiger' });
console.log(newObj);

// 8. 고유한 식별자(unique identifier)
const id = Symbol('uuid');
const id2 = Symbol('uuid');
console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
console.clear();
const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    return a + b;
  },

  sayHi: function () {
    return 'hello';
  },

  sayHi2: () => {
    return this;
  },
  sayHi3() {
    return this;
  },
};

// Array
const newArr = new Array(1, 2, 3);
const arr = [10, 100, 1000];

// function
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result);

function 붕어빵(재료) {
  return `따끈따끈 ${재료} 붕어빵`;
}
const 팥뿡 = 붕어빵('팥');

// this
