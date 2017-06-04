import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

import Pages from './pages'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Pages />
    </Router>
  </Provider>,
  document.getElementById('root')
)
