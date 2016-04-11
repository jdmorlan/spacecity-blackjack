import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from '../components/main'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>
);
