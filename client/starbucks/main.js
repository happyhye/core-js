



const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = depth => depth.style.height = '0px';

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {

    const target = a.lastElementChild;

    // 모든 depth의 높이를 0으로 만들어주어야 함
    depthList.forEach(h);

    // 세로높이를 100px로
    target.style.height = '100px';
  })
})

// 헤더에 마우스가 떠났을때 depth 높이 0으로
header.addEventListener('mouseleave', () => depthList.forEach(h))