function getNode(node, context = document) {
  // if(isString(context)) context = document.querySelector(context);

  //위 조건 말고 이렇게 쓸 수도 있음
  // context가 documnet가 아니라면 querySelector를 돌아줘
  if(context.nodeType !== 9) context = document.querySelector(context);


  return context.querySelector(node);
}


function getNodes(node, context = document) {
  if(context.nodeType !== 9) context = document.querySelector(context);


  return context.querySelectorAll(node);
}