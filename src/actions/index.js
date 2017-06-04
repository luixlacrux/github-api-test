import axios from 'axios'

export const FETCH_GISTS = 'FETCH_GISTS'

export function fetchGists () {
  return async (dispatch, getState) => {
    const response = await axios.get('https://api.github.com/gists')
    dispatch({ type: FETCH_GISTS, payload: response.data })
  }
}
