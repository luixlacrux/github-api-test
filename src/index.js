import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'
import Pages from './pages'

render(
  <Provider store={store}>
    <Router>
      <Pages />
    </Router>
  </Provider>,
  document.getElementById('root')
)
