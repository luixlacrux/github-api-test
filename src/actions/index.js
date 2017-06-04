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
