class Button extends HTMLElement {

  constructor(){
    super();

    // c-button의 쉐도우 돔을 열어줘
    // c-button을 어떻게 잡아? -> this
    this.attachShadow({mode: 'open'});

    // 쉐도우 돔 안에 원하는 태그 집어넣기
    this.shadowRoot.innerHTML= /* html */ `
      <button>hello</button>
    `

  }

  connectedCallback(){

  }

  disconnectedCallback(){

  }

}


customElements.define('c-button',Button);

console.log( document.querySelector('button') );  //null. 수집 불가능
console.log( document.querySelector('c-button').shadowRoot.querySelector('button') );  //접근가능
