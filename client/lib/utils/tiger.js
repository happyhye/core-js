//fetch 실습

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


const tiger = async (url)=> {

  const response = await fetch(url); //fetch를 통해 통신함

  if(response.ok) {
    response.data = await response.json();
  }

  
  return response;
}


const result = await tiger(ENDPOINT);
console.log(result.data);


//IIAFE
(async function(){




})()


