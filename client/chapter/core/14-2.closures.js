/* normal function */
// function earth(){
 
//   let water = true;
//   let gravity = 10;
  
//   return function(value){
//     gravity = value;
    
//     return [water,gravity]
//   }
// }

/* arrow function */
const earth = () => {
 
  let water = true;
  let gravity = 10;
  
  return  (value) => {
    gravity = value;

    return [water,gravity]
  }
}


const ufo = earth()

ufo(-10)


// tiger는 자신이 태어난 환경을 기억함 => water, gravity에 접근 가능
// 지구에 호랑이가 살고 있었는데 잘못해서 쫓겨남... => return tiger
// ufo가 호랑이 발견 => 너 가져갈게(납치)

// 굳이 이름이 호랑이일 필요가 없음. 정보만 있으면 됨 => 안쪽 함수는 이름 없어도 됨




/* --------------------------------------------------------------------- */


const button = document.querySelector('button');




/* normal function */
// function handleClick(){

//   let isClicked = false;

  
//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
  
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked;
//   }

//   return inner;
// }




// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)

/* --------------------------------------------------------------------- */

function useState(init) {
  let value = init;

  function read() {
    return value
  }

  function write(newValue) {
    value = newValue;
  }

  return [read,write];  //함수본문 2개가 담김
}


const [getNumber, setNumber] = useState(10);

// const getter = result[0]
// const setter = result[1]

