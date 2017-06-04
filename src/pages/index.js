import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GistList from '../containers/GistList'
import GistDetail from '../containers/GistDetail'

const Pages = () => {
  return (
    <section className="App">
      <Switch>
        <Route exact path="/" component={GistList} />
        <Route exact path="/gist/:id" component={GistDetail} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </section>
  )
}

export default Pages
