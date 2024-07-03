const template = document.createElement('template')

template.innerHTML = /* html */ `
  <div>bye</div>
  <div>JS</div>
`



const app = document.querySelector('#app')
const temp = document.querySelector('#temp')

console.log(temp.content); //바로써도되는데, 훼손될가능성이 있기때문에 복제 후 사용한다.

// 통째로 복사
const clone = template.content.cloneNode(true)

app.appendChild(clone)