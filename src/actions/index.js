import axios from 'axios'
import parseLinkHeader from 'parse-link-header'

const endpoint = 'https://api.github.com/gists'

export const SHOW_GISTS = 'SHOW_GISTS'

export function showGists (list, linkPages) {
  return {
    type: SHOW_GISTS,
    list,
    linkPages,
  }
}

export const FETCH_GISTS = 'FETCH_GISTS'

export function fetchGists (url = endpoint) {
  return async dispatch => {
    const response = await axios.get(url)
    const linkPages = parseLinkHeader(response.headers.link)
    dispatch(showGists(response.data, linkPages))
  }
}

// Gist item detail

export const SHOW_GIST_ITEM = 'SHOW_GIST_ITEM'

export function showGistItem (gist) {
  return {
    type: SHOW_GIST_ITEM,
    gist,
  }
}

export const FETCH_GIST_ITEM = 'FETCH_GIST_ITEM'

export function fetchGistItem (id) {
  return dispatch => {
    axios.get(`${endpoint}/${id}`)
      .then(gist => dispatch(showGistItem(gist.data)))
      .catch(e => console.error(e))
  }
}
