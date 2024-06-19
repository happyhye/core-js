/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;



// 3. 메서드 : element.addEventListener(event, handler[, phase])


function handleClick(e){
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);

}


const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)







/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({offsetX:x, offsetY:y}){
  // const {offsetX:x, offsetY:y} = e;

  // let x = e.offsetX;
  // let y = e.offsetY;

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`

}

// ground.addEventListener('click',handleClickBall)



function handleMove({offsetX:x,offsetY:y}){

  console.log(x,y);

  let template = /* html */`
    <div class="emotion" style="top:${y - 16}px; left:${x - 16}px;">😍</div>
  `
  
  insertLast(ground,template);

}



// ground.addEventListener('mousemove',handleMove)

/* -------------------------------------------------------------- */

// throttle (수도꼭지),  debounce(공 튀김 방지)


function debounce(callback,limit = 500){
  let timeout;
  return function (e){
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
      callback.call(this,e)
    },limit)
  }
}



function throttle(callback, limit=500) {
  let waiting = false;

  return function(e) {
    if(!waiting) {
      callback.call(this, e)
      waiting = true;

    setTimeout(() => { //1초뒤에 waiting을 false로 바꿈
      waiting = false;
    }, limit);
  }
}
}

// throttle(()=> {
//   console.log('throttle hi');
// })

ground.addEventListener('mousemove',throttle(handleMove))
