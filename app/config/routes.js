import React from 'react'
import { Router, Route } from 'react-router'

import MainContainer from '../containers/mainContainer'

export default function getRoutes (history) {
  return (
    <Router history={ history }>
      <Route path='/' component={ MainContainer }>
      </Route>
    </Router>
  )
}
