/* global gsap */

import { getNode, renderUserCard, tiger, changeColor, delayP, renderSpinner, renderEmptyCard, clearContents } from "./lib/index.js";

// const getData = async () =>{
//   const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')

//   console.log(data); 
// }

// getData()

// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


// const response = await tiger.get(ENDPOINT);
// console.log(response.data);


// ---------------------------------------------------------------------------------

// 1. user 데이터 feath 해주세요.
// 2. feath 데이터의 유저 이름만 콘솔 출력
// 3. 유저 이름 화면에 렌더링

const ENDPOINT = 'http://localhost:3000/users'

const userCardInner = getNode('.user-card-inner');

async function renderUserList(){

  //로딩 스피너 렌더링
  renderSpinner(userCardInner)

  //로딩을 사용하기 위해 강제로 2초 딜레이
  // await delayP(2000)

  try {


    // 로딩 없애기 (로딩스피너가 생성된 다음에 제거)
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete(){
        console.log('애니메이션 끝');
        this._targets[0].remove();
      }
    })
    // getNode('.loadingSpinner').remove();
    

    const response = await tiger.get(ENDPOINT);
    const data = response.data; //이 데이터는 배열

    //user 정보 가져옴 -> 그중 user.name만
    data.forEach((user) => renderUserCard(userCardInner, user));
    
    //usercard 색깔 추가
    changeColor('.user-card');

    // gsap 애니메이션
    gsap.from('.user-card', {
      x:100,
      opacity:0,
      stagger:{
        amount:1, //1초안에 모든걸 다 나오게 해줘
        from: 'start' //~기준으로 나오게 해줘
      }
    })
  } catch (error) {
    console.log(error);
    console.error('에러가 발생했습니다!');

    renderEmptyCard(userCardInner)
  }
}

renderUserList()





// -------------------------------------------- 삭제 이벤트
// 이벤트 위임을 사용함

function handelDeleteCard(e) {
  const button = e.target.closest('button');

  // 버튼이 아니면 그냥 return
  if(!button) return;
  console.log(button);

  // closest 한번 더
  const article = button.closest('article');
  // console.log(article.dataset.index.slice(5)); //'user-1', 'user-2'....
  // slice로 'user-1'에서 숫자만 뽑기
  const index = article.dataset.index.slice(5)
  console.log(index);

  tiger.delete(`${ENDPOINT}/${index}`)
  .then(()=>{
    
    // 유저카드 삭제 후 다시 요청 보내고, 렌더링
    clearContents(userCardInner) //삭제 후
    renderUserList() //다시 렌더링
  })

}

userCardInner.addEventListener('click', handelDeleteCard)




// POST 통신 -> create 버튼 눌렀을 때
const createButton = getNode('.create')
const cancelButton = getNode('.cancel')
const doneButton = getNode('.done')


function handleCreate(){
  gsap.to('.pop',{
    autoAlpha: 1
  })
}

function handelCancel(e){
  e.stopPropagation(); //버블링 x

  gsap.to('.pop',{
    autoAlpha: 0
  })
}

function handelDone(e) {
  e.preventDefault();

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  // console.log( name, email, website );

  // POST 통신
  tiger.post(ENDPOINT, {name, email, website})
  .then(()=>{

    // 팝업닫기
    gsap.to('.pop',{
      autoAlpha: 0
    })
    // 카드 콘텐츠 비우기
    clearContents(userCardInner)
    // 유저카드 다시 렌더링하기
    renderUserList()

  })
  
}

createButton.addEventListener('click', handleCreate)
cancelButton.addEventListener('click', handelCancel)
doneButton.addEventListener('click', handelDone)