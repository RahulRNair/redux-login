import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import RouterApp from './RouterApp.jsx'

let store = createStore(todoApp)
console.log(store);
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
render(<RouterApp />, document.getElementById('root'))
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
