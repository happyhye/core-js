class UserCard extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = /* html */ `
      <button type="button">btn</button>
    `

    this.button = this.shadowRoot.querySelector('button')
  }

  connectedCallback() {
    console.log(this);  //user-card 객체

    this.button.addEventListener('click', this.clickMe.bind(this) )
  }

  clickMe(){
    console.log('THX!');
    console.log(this);
  }
}


customElements.define('user-card',UserCard);