import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import GistInfo from '../components/GistInfo'

class GistDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gist: {},
      loading: true,
      error: null,
    }
  }

  async initialFetch (id) {
    const url = `https://api.github.com/gists/${id}`
    try {
      const { data: gist } = await axios.get(url)
      this.setState({
        gist,
        loading: false,
      })
    } catch (e) {
      this.setState({
        loading: false,
        error: e
      })
    }
  }

  componentDidMount () {
    const { params } = this.props.match

    this.initialFetch(params.id)
  }

  render () {
    const { gist, loading } = this.state
    if (loading) return <p>loading...</p>

    return (
      <GistInfo {...gist} />
    )
  }
}

GistDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired
}

export default GistDetail
