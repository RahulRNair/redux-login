let nextTodoId = 0
export const addTodo = (uname,password) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    uname,
    password
  }
}
export const userLogin = (uname,password) => {
  return {
    type: 'USER_LOGIN',
    id: nextTodoId++,
    uname,
    password
  }
}
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
