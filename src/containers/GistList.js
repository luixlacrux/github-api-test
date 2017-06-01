import React, { Component } from 'react'
import axios from 'axios'

import Gists from '../components/Gists'
import Pagination from '../components/Pagination'

class GistList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gists: [],
      loading: true,
      error: null,
      page: 0,
    }

    this.nextPage = this.nextPage.bind(this)
    this.backPage = this.backPage.bind(this)
  }

  async initialFetch (page=0) {
    const url = `https://api.github.com/gists?page=${page}`

    try {
      const { data: gists } = await axios.get(url)
      this.setState({
        gists,
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
    this.initialFetch()
  }

  nextPage () {
    const page = this.state.page + 1
    this.setState({ page })
    this.initialFetch(page)
    window.scrollTo(0,0)
  }

  backPage () {
    const page = this.state.page > 0 ? this.state.page - 1 : 0
    this.setState({ page })
    this.initialFetch(page)
    window.scrollTo(0,0)
  }

  render () {
    const { loading, gists } = this.state

    if (loading) return <p>loading...</p>

    return (
      <div>
        <Gists gists={gists} />
        <Pagination
          activePage={this.state.activePage}
          nextPage={this.nextPage}
          backPage={this.backPage}
        />
      </div>
    )
  }
}

export default GistList
