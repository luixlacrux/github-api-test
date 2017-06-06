import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchGists } from '../actions'

class GistsList extends Component {
  constructor (props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  componentDidMount () {
    this.props.fetchData()
  }

  prevPage (e) {
    const { url } = this.props.linkPages.prev
    this.props.fetchData(url)
  }

  nextPage (e) {
    const { url } = this.props.linkPages.next
    this.props.fetchData(url)
  }

  render () {
    const { linkPages, gists, isFetching } = this.props
    if (isFetching) return <h4>Loading...</h4>
    return (
      <div>
        <ul>
          {gists.map(gist => (
            <li key={gist.id}>
              <Link to={`/gists/${gist.id}`}>
                {gist.description}
              </Link>
            </li>
          ))}
        </ul>
        <footer>
          { linkPages.prev && <button onClick={this.prevPage}>Back</button> }
          { linkPages.next && <button onClick={this.nextPage}>Next</button> }
        </footer>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {
    list: gists,
    linkPages,
    isFetching
  } = state.gists || {
    isFetching: true,
    items: [],
  }

  return {
    gists,
    linkPages,
    isFetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url) => {
      dispatch(fetchGists(url))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GistsList)
