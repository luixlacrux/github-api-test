import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGistItem } from '../actions'

import GistInfo from '../components/GistInfo'

class GistsDetail extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchData(id)
  }

  render () {
    const { gist, isFetching } = this.props
    if (isFetching) return <h4>Loading...</h4>

    return (
      <GistInfo gist={gist} />
    )
  }
}

function mapStateToProps (state) {
  const {
    data: gist,
    isFetching,
  } = state.gist || {
    data: {},
    isFetching: true,
  }

  return {
    gist,
    isFetching,
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
