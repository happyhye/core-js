/* --------- */
/* Object    */
/* --------- */

/* global isObject */


const html = /* html */ `
  <h1>title</h1>
  <div class="first">
    hello
  </div>
`

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%),'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: 'user-id-zsdsda@sfa',
  name: 'hyeji',
  email: 'sdfasdf@naver.com',
  isSignIn: false,
  permission: 'paid'
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);             //getter
console.log(authUser.permission = 'free');  //setter


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);                //getter
console.log(authUser['permission'] = 'allPass');  //setter




Object.prototype.nickName = '호랑이';

// 객체 안에 키가 있는지 확인하는 방법
// in문 - 위험: nickName도 조회됨. 그리고 단일대상만 사용가능
console.log('uid' in authUser);

// for..in문 - 반복문 돌려서 체크: nickName도 조회되니 hasOwnProperty 사용
for(let key in authUser){
  if({}.hasOwnProperty.call(authUser, key)){
    console.log(authUser[key]);
  }
}





// 객체의 key만 모아서 배열을 반환하는 메서드
// Object.keys()
const keyList = Object.keys(authUser);
console.log(keyList);



// 객체의 value만 모아서 배열을 반환하는 메서드
// Object.values()
const valueList = Object.values(authUser);
console.log(valueList);




function getPropertiesList(obj) {

  let result = [];

  for(let key in obj) {
    if({}.hasOwnProperty.call(obj, key)) {
      result.push(obj[key]);
    }
  }

  return result;
}

getPropertiesList(authUser);  //['uid', 'name', 'email', 'isSignIn', 'permission']





console.clear();

// 프로퍼티 제거(remove) or 삭제(delete)

function removeProperty(obj, key) {
  if(isObject(obj)) {
    return obj[key] = null;
  }
}

removeProperty(authUser, 'name') // authUser.name = null



function deleteProperty(obj, key){
  if(isObject(obj)) {
    delete obj[key];
  }
}



deleteProperty(authUser,'name') // undefined






// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel



function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone
  }
}

createUser('나나', 20, '010-1234-5678');


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name,
  email,
  authorization,
  isLogin
}







// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0
}


const a = {}
isEmptyObject(a)  //true
isEmptyObject(student)  //false





/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10,100,1000,10000];

const [a0, ...rest] = arr;


console.log(Object.entries(authUser));; //[ [key,value], [key,value] ]

for(let [key,value] of Object.entries(authUser)){
  console.log(key, value);
}



const [first, second] = document.querySelectorAll('span');
// const first = spanList[0];
// const second = spanList[1];






/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 순서를 고려하지 않음. key와 변수명이 동일해야 함. => 변수명 o 
// 기본 값 사용 가능 
const salaries = {
  함정민:95,
  지유진:110,
  이진용:15,
  한상학:300
}


const {함정민:함 = 100,지유진:지,한상학:한,이진용:리,장주원:장 = 500} = salaries;

// const 이진용 = salaries.이진용;
// const 지유진 = salaries.지유진;


function sum(a){

  return 1 + a
}

sum()



function createUserObject({
  name = '철수',
  age,
  gender,
  job:j = '홈프로텍터'
} = {}){

  
  
  // const {name,age,gender,job} = obj;


  return { name, age, gender, job:j }

}


const data = {
  name:'beom',
  age:40,
  gender:'male',
  job:'developer',
  address:'서울시 중랑구',
  tel:'010-716....'
} 

const person = createUserObject(data);




const { 
  userName, 
  age, 
  gender, 
  job, 
  address = '서울시 중랑구', 
  tel
 } = {
  userName:'beom',
  age:40,
  gender:'male',
  job:'developer',
  address:'서울시 중랑구',
  tel:'010-716....'
}

// const {acos} = Math;

// const acos = Math.acos;