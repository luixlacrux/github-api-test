import axios from 'axios'
import parseLinkHeader from 'parse-link-header'

const endpoint = 'https://api.github.com/gists'

export const REQUEST_GISTS = 'REQUEST_GISTS'

export function requestGists (url) {
  return {
    type: REQUEST_GISTS,
    url,
  }
}

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
  return dispatch => {
    dispatch(requestGists(url))
    return axios.get(url)
      .then(response => {
        const linkPages = parseLinkHeader(response.headers.link)
        return dispatch(showGists(response.data, linkPages))
      })
  }
}

// Gist item detail
export const REQUEST_GIST_ITEM = 'REQUEST_GIST_ITEM'

export function requestGistItem (id) {
  return {
    type: REQUEST_GIST_ITEM,
    id,
  }
}

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
    dispatch(requestGistItem(id))
    return axios.get(`${endpoint}/${id}`)
      .then(gist => dispatch(showGistItem(gist.data)))
      .catch(e => console.error(e))
  }
}
