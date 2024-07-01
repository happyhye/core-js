import { 
  clearContents,
  deleteStorage,
  getNode,
  getStorage,
  setStorage,
} from "./lib/index.js";

const textField = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

getStorage('text')
.then((res)=>{
  // console.log(res); //저장된값이 출력됨

  textField.value = res;
})

function handleTextField(){
  const value = this.value;
  console.log(value);

  setStorage('text', value)

}



function handleClear(){
  deleteStorage('text') //제거
  clearContents(textField) //input도 초기화
}

textField.addEventListener('input', handleTextField)
clearButton.addEventListener('click', handleClear)