import labels from './labels'

import { combineReducers } from 'redux'

export default function getReducers (reducers = {}) {
  const defaultReducers = {
    labels
  }

  return combineReducers(Object.assign({}, defaultReducers, reducers))
}
