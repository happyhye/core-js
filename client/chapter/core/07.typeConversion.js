/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(typeof String(YEAR)); //명시적
console.log(typeof (YEAR + '')); //암시적

// undefined, null
let days = null;
console.log(days + '');
let friends;
console.log(friends + '');

// boolean
let isClicked = true;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //NaN

// null
let money = null;
console.log(Number(money)); //0

// boolean
let isM = true;
console.log(Number(isM));

// string
let num = '100';
console.log(Number(num));
console.log(num * 1);
console.log(num / 1);
console.log(+num);

// numeric string
console.clear();
const width = '120.5px';
//숫자만 뽑아내려면
console.log(parseInt(width, 10));
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean(''));
console.log(Boolean('0'));

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
