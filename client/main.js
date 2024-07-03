class Buttn extends HTMLElement {
  constructor(){
    super();


    this.button = document.querySelector('button');
  }

  connectedCallback(){
    this._render();
  }

  disconnectedCallback() {

  }

  static get observedAttributes() { //(3)
    return ['id'];   //id를 계속 감시해
  }


  attributeChangedCallback(name, oldValue, newValue) { // (4)
    console.log( name, oldValue, newValue );

    if(oldValue !== newValue) {
      this._render()
    }
  }

  _render(){
    this.button.textContent = this.id
  }

}

customElements.define('c-button', Buttn)


// 외부에 의해 속성을 강제로 바꿈
const c = document.querySelector('c-button')
let count = 0;

c.addEventListener('click', ()=>{
  c.setAttribute('id',  ++count)
})