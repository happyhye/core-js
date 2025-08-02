import { TodoList } from "./components/TodoList/TodoList.js";
import { TodoItem } from "./components/TodoItem/TodoItem.js";

// app 잡고
const app = document.getElementById('app')

// define 정의
const defineElements = ()=>{
  customElements.define('todo-app', TodoList);
  customElements.define('todo-item', TodoItem);
}

defineElements()

// todo-app 태그 생성
const todoElement = document.createElement('todo-app')
app.append(todoElement);