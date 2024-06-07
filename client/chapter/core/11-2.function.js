/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

[1000,5000,2500].forEach(function(){})

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 이라 불리는 변수
  let total = 0;
  
  // for 문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }


  // for..for 문
  // for(let value of arguments){
  //   total += value;
  // }

  // console.log(arguments);


  // arguments => array

  const arr = [...arguments]
  // const arr = Array.from(arguments)
  // const arr = Array.prototype.slice.call(arguments);
           
  // console.log( arr );


  // forEach
  // arr.forEach(function(price){
  //   total += price;
  // })

  // arr.forEach(price => total += price)


  // reduce
  // const result = arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)
  
  // const result = arr.reduce((acc,cur) => acc + cur,0)

  
  //빌려쓰기
  // Array.prototype.forEach.call(arguments, function(item)) {
  //   total +=item;
  // }



  // 태생을 배열로 바꾸기 (부모 바꿔치기)
  arguments.__proto__ = Array.prototype
  // console.log(arguments);



  return total;

};






// const arr = ['수박', '참외', '딸기']

// const mapValue = arr.map(function(item){
//   return '맛있는-' + item
// })

// console.log(mapValue);




const result = calculateTotal(1000,5000,2500,4000,2300);

// console.log( result );

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function Hello(){};


// 콜백 함수 (표현)식
// let callbackFunctionExpression = function(isActive, success, fail) {
//   if(isActive === true) success();
//   else fail();
// };
// callbackFunctionExpression(
//   false, 
//   function(){console.log('성공입니다');}, 
//   function(){console.log('실패입니다');}
// );


function movePage(url, success, fail) {
  if(url === 'https://www.naver.com') { //url을 제대로 입력했다면
    success(url)
  }
  else {
    fail()
  }
}

movePage(
  'https://www.naver.com',
  function(url){
    console.log(`현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`);
    // location.href = url;
  },
  function(){
    console.log('잘못된 url을 입력하셨습니다.');
  }
)



function map(arr, func) {
  let result = [];

  for(let i=0; i< arr.length; i++) {
    result.push(func(arr[i] * 2))
  }

  return result
}

map([1,2,3],item => item/2)

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const MASTER = (function (word){

  console.log(word);   //'a'가 출력


  let uuid = 'azxcqwASFqjKJ112314!23'
  
  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})('a')





const people = [
  {
    nickName:'tiger',
    age:40
  },
  {
    nickName:'beom',
    age:45
  },
  {
    nickName: 'seon',
    age:20
  }
]



const template = people.reduce(function(htmlCode,cur){
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`
},'')



// document.body.insertAdjacentHTML('beforeend',template)