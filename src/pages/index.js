import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import GistsList from '../containers/GistsList'
import GistsDetail from '../containers/GistsDetail'

const Pages = () => (
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={GistsList} />
      <Route exact path="/gists/:id" component={GistsDetail} />
      <Route render={() => <h5>Not found</h5>} />
    </Switch>
  </main>
)

export default Pages
