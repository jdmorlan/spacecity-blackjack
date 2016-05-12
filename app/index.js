require('./main.scss');

import React from 'react'
import ReactDOM from 'react-dom'

import getRoutes from './config/routes'
import getReducers from './redux/modules'

import { hashHistory } from 'react-router'

import { createStore } from 'redux'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'

const store = createStore(
  getReducers({ routing: routerReducer })
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    { getRoutes(history) }
  </Provider>
  ,
  document.getElementById('app'));
