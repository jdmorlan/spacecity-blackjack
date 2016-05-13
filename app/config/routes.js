import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import MainContainer from '../containers/mainContainer'
import GameContainer from '../containers/gameContainer'

export default function getRoutes (history) {
  return (
    <Router history={ history }>
      <Route path='/' component={ MainContainer }>
        <IndexRoute component={ GameContainer } />
      </Route>
    </Router>
  )
}
