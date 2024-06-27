import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';





function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}

const first = getNode('.first');
const second = getNode('.second');




// delay(()=>{ 
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
//  })

const shouldRejected = false;

const p = new Promise((성공,실패)=>{
  if(!shouldRejected){

    성공('성공!!');

  }else{

    실패('실패!');
  }
});

 



// 객체 합성 --------------------------------------
const defaultOptions = {
  shouldRejected:false,
  data:'성공',
  errorMessage:'알 수 없는 오류',
  timeout:1000
}

export function delayP(options) {

  let config = {...defaultOptions}

  //만약 전달받은 값이 숫자라면, config 안의 timeout값을 덮어써야 함 => config를 let으로.
  if(isNumber(options)){
    config.timeout = options;
  }

  //만약 전달받은 값이 객체라면, 객체 합성
  if(isObject(options)){
    config = {...defaultOptions,...options};
    // Object.assign(config,options) //전개구문말고 이렇게 써도 됨
  }


  //구조분해할당 : options과 defaultOptions이 mixin
  let {shouldRejected,data,errorMessage,timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({message:errorMessage});
      }
    }, timeout);
  });
}


delayP(5000)




async function delayA(data){
  const p = new Promise((res, rej)=>{
    setTimeout(()=>{
      res('성공')
    }, 2000)
  })

  const result = await p;

  console.log(result);

  return
}



// async function 라면끓이기(){

//   const a = await delayP({data:'물'})
//   console.log( a );

//   const b = await delayP({data:'스프'});
//   console.log( b );
  

//   const c = await delayP({data:'면'});
//   console.log( c );
  

//   const d = await delayP({data:'그릇'});
//   console.log( d );
  

// }

// 라면끓이기()





async function getData(){
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/172')

  // console.log(data.sprites['front_default']); //포켓몬 이미지
  console.log(data.sprites.other.showdown['front_default']); //gif 포켓몬이미지

  //화면에 gif 이미지 뿌리기
  insertLast(document.body,`<img src="${data.sprites.other.showdown['front_default']}" alt="" />`)
}

// getData()