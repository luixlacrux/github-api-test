import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showGists } from '../actions'

class App extends Component {
  componentWillMount () {
    this.props.showGists()
  }

  render () {
    return (
      <div>
        <h2>Gists List</h2>
        <ul>
        {this.props.gists.map(gist => (
          <li key={gist.id}>{gist.description}</li>
        ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    gists: state.gists.list
  }
}

export default connect(mapStateToProps, { showGists })(App)
