import data from "./data/data.js";
import { getNode, getRandom, insertLast, clearContents } from './lib/index.js';

// console.log(data);



// [phase-1]
// 1. 주접 떨기 버튼을 클릭하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결하기 addEventListener('click')

// 2. input 값 가져오기

// 3. data 함수에서 주접 1개 꺼내기
//  - data(name)
//  - getRandom()

// 4. pick 항목 렌더링하기



const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value; // 2. input 값 가져오기
  const list = data(name); // 3. data 함수에서 주접 1개 꺼내기
  const pick = list[getRandom(list.length)]; // 3. data 함수에서 주접 1개 꺼내기

  console.log(pick); // 3. data 함수에서 주접 1개 꺼내기

  clearContents(result); //결과 부분 한번 싹 클리어하기
  insertLast(result,pick); // 4. pick 항목 렌더링하기

}

submit.addEventListener('click', handleSubmit);



