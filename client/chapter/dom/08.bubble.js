/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',(e)=>{
  // console.log('target: ',e.target); //마우스를 가장 먼저 맞이하는 순간의 대상을 수집
  // console.log('currentTarget: ',e.currentTarget); //이벤트 발생 시점
  // console.log('this: ',this); //window (애로우펑션이라 window)

  // 콘솔에 css 적용
  console.log('%c section', 'color:orange');
})

article.addEventListener('click',(e)=>{
  console.log('%c article', 'color:hotpink');
})

p.addEventListener('click',(e)=>{
  console.log('%c p', 'color:dodgerblue');
})


/* 캡처링 ----------------------------------------------------------------- */