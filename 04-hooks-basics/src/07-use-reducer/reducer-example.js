const initialState = [{
  id: 1,
  todoAdd: 'Hooks of react',
  done: false,
}]

const todoReducer = (state = initialState, action = {}) => {
  if(action.type === '[DONE] add todo') {
    return [ ...state, action.payload ]
  }
  return state;
}

let todos = todoReducer();

console.log(todos)

const addTodo = {
  id: 2,
  todoAdd: 'Test with Jest and Enzyme',
  done: false
}

const actionType = {
  type: '[DONE] add todo',
  payload: addTodo,
}

todos = todoReducer(todos, actionType);

console.log({ state: todos })