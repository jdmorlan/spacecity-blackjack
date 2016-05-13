import game from './game'

import { combineReducers } from 'redux'

export default function getReducers (reducers = {}) {
  const defaultReducers = {
    game
  }

  return combineReducers(Object.assign({}, defaultReducers, reducers))
}
