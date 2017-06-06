import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGistItem } from '../actions'

class GistsDetail extends Component {
  componentWillMount () {
    const { id } = this.props.match.params
    this.props.fetchData(id)
  }

  render () {
    return (
      <div>
        <h4>{this.props.gist.description}</h4>
        <span>Create at {this.props.gist.created_at}</span>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    gist: state.gist.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (id) => {
      dispatch(fetchGistItem(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GistsDetail)
