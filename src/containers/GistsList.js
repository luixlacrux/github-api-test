import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGists } from '../actions'

class GistsList extends Component {
  constructor (props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  componentWillMount () {
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
    const { linkPages, gists } = this.props
    if (!gists.length) return <h1>loading...</h1>

    return (
      <div>
        <ul>
          {gists.map(gist =>
            <li key={gist.id}>{gist.description}</li>
          )}
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
  const { list, linkPages } = state.gists
  return {
    gists: list,
    linkPages,
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
