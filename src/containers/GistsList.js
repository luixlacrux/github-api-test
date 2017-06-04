import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGists } from '../actions'

class GistsList extends Component {
  componentWillMount () {
    this.props.fetchGists()
  }

  render () {
    return (
      <ul>
        {this.props.gists.map(gist =>
          <li key={gist.id}>{gist.description}</li>
        )}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    gists: state.gists.list
  }
}

export default connect(mapStateToProps, { fetchGists })(GistsList)
