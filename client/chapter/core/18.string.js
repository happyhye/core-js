/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);
console.log(immutableChangeCharacter);


// 부분 문자열 추출
console.log(message);
let slice = message.slice(4,-1);
console.log(slice);

let subString = message.substring(2,5);
console.log(subString);

// let subStr = message.substr();


// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');
console.log(indexOf); //hi라는 문자가 없어서 -1 반환


// 브라우저 체크 함수
function checkBrowser(){

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch(true){
    case agent.indexOf('edg') > -1 :
      browserName = 'MS Edge'
    break;
    case agent.indexOf('chrome') > -1 && !!window.chrome :
      browserName = 'Chrome'
    break;
    case agent.indexOf('safari') > -1 :
      browserName = 'Safari'
    break;
    case agent.indexOf('firefox') > -1 :
      browserName = 'Firefox'
    break;
    case agent.indexOf('trident') > -1 :
      browserName = 'IE'
    break;
    default:
      browserName = '무슨 브라우저 쓰세요..?'
  }

  return browserName

}

checkBrowser() // chrome


let lastIndexOf = message.lastIndexOf('s');
let includes = message.includes('Less'); //true
let startsWith = message.startsWith('less'); //false
let endsWith = message.endsWith('more.');



let str = '    a    b     c                d'
// 공백 잘라내기
let trimStart = str.trimStart();
console.log(trimStart);

let trimEnd = str.trimEnd();
console.log(trimEnd);
let trim = str.trim();

const replaceAll = str.replaceAll(' ','')

const replace = str.replace(/\s*/g,'')
console.log(replace);



const trimText = (text) => text.replaceAll(' ','');

trimText(str); //abcd



// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLowerCase(); //소문자
let toUpperCase = message.toUpperCase(); //대문자


console.clear()

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}