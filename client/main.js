class MyElement extends HTMLElement {

  constructor(){
    super(); //부모의 능력을 내가 다 상속받겠다.
  }

  connectedCallback(){
    console.log('탄생함');
  }

  disconnectedCallback(){
    console.log('죽음');
  }
}

// 사용할 태그이름 정의,  클래스 연결
customElements.define('c-element', MyElement)

// 태그 생성
const elem = document.createElement('c-element');
const app = document.getElementById('app');
console.log(elem);
// 추가
app.appendChild(elem)