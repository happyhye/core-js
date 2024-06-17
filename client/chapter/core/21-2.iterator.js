function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const gene = gen();

const customIter = {
  *[Symbol.iterator](){
    yield 1;
    yield 2;
    yield 3;
  }
}

for(const a of customIter){
  console.log(a);
}





function* idGenerator(){
  // let id = 1;
  while(true){
    yield `user-${crypto.randomUUID()}`
  }
}


const id = idGenerator();

