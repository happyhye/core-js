//fetch 실습

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/'


const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}

export const tiger = async (options)=> {

  //객체 합성, 구조분해할당 동시에
  const {url, ...restOptions} = {
    ...defaultOptions, 
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  //구조분해할당
  // const {url, ...restOptions} = config;

  //fetch를 통해 통신함
  const response = await fetch(url, restOptions);

  if(response.ok) {
    response.data = await response.json();
  }

  
  return response;
}


// const result = await tiger.get(ENDPOINT);
// console.log(result);






tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}


tiger.post = (url,body,options) => {
   return tiger({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
   })
}


tiger.delete = (url,options) => {
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}


tiger.put = (url,body,options) => {
  return tiger({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


tiger.patch = (url,body,options) => {
  return tiger({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}











//IIAFE
// (async function(){




// })()


