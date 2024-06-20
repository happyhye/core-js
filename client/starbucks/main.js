
/* global gsap */


const aList = document.querySelectorAll('nav a');

// GSAP 버전
aList.forEach((a) => {

  const target = a.lastElementChild;

  // 애니메이션 생성
  const tl = gsap.timeline({paused: true})
  .to(target,{height:100, ease:'power3.inOut'})


  a.addEventListener('mouseenter', () => tl.play()) //마우스 올렸을 때
  a.addEventListener('mouseleave', () => tl.reverse()) //마우스 떠났을 때
})







// const depthList = document.querySelectorAll('.depth');
// const header = document.querySelector('#header');
// const h = depth => depth.style.height = '0px';

// 일반 버전
// aList.forEach((a) => {
//   a.addEventListener('mouseenter', () => {

//     const target = a.lastElementChild;

//     // 모든 depth의 높이를 0으로 만들어주어야 함
//     depthList.forEach(h);

//     // 세로높이를 100px로
//     target.style.height = '100px';
//   })
// })

// // 헤더에 마우스가 떠났을때 depth 높이 0으로
// header.addEventListener('mouseleave', () => depthList.forEach(h))