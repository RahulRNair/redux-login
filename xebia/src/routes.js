import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
//import Greetings from './components/Greetings';
//import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
//import NewEventPage from './components/events/NewEventPage';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />

    <Route path="login" component={LoginPage} />

  </Route>
)
