import React, { Component } from 'react'
import App from './App';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

const Home = () => <h1>Hello from Home!, you can call "/address", "/country" to verify routing</h1>
const Address = () => <h1>We are located at 555 MG Street, Sector 15.</h1>
const Country = () => <h1>We are located in India.</h1>
export default  RouterApp
class RouterApp extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/address' component={Address} />
                     <Route path='/country' component={Country} />
      </Router>
    )
  }
}
