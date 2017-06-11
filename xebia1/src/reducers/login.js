import LoginApiCall from '../utils/login_request';

const login = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
    alert("hai");

    LoginApiCall.login(action);

         //return state;
      // return {
      //   id: action.id,
      //   uname: action.uname,
      //   password: action.password,
      //   completed: false
      // }
    case 'USER_LOGOUT':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}
export default login
