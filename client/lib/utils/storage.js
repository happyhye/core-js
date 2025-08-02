import { isString } from "./type.js";

console.log('storage');

//user 객체
const user = {
  name:'tiger',
  age:40,
  gender:'male',
  email: 'tiger@naver.com'
}

//문자열로 저장
// localStorage.setItem('user', JSON.stringify(user))


// 사용하는 방법
// const data = localStorage.getItem('user')
// console.log(data); //객체가 아닌, 문자화된 데이터

// const data = JSON.parse(localStorage.getItem('user')); // parse 해석기를 사용한다.
// console.log(data);



/* ------------------------- 함수 만들기 ------------------------- */
const {localStorage:storage} = window; //구조분해할당


export async function setStorage(key, value){

  return new Promise((resolve, reject)=>{

    if(isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve()
    }
    else{
      reject()
    }
  })
}

/*
setStorage('user', user).then() 또는
await setStorage('user', user)  사용
*/


export function getStorage(key) {
  
  return new Promise((resolve, reject)=>{
    if(isString(key)) {
      resolve(JSON.parse(storage.getItem(key)))
    }
    else{
      reject()
    }
  })

}



// const data =  getStorage('user').then((res)=>{
//   console.log(res);
// })

// const data =  await getStorage('user')
// console.log(data);






export function deleteStorage(key){

  return new Promise((resolve,reject)=>{
    !key ? storage.clear() : storage.removeItem(key);
    resolve()
  })

}

// deleteStorage('user') //키 삭제
// deleteStorage() //전체삭제
