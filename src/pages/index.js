import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import GistsList from '../containers/GistsList'

const Pages = () => (
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={GistsList} />
      <Route exact path="/gist/:id" render={() => <h5>Gist detail</h5>} />
      <Route render={() => <h5>Not found</h5>} />
    </Switch>
  </main>
)

export default Pages
