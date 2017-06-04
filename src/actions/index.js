import axios from 'axios'

export const SHOW_GISTS = 'SHOW_GISTS'

export function showGists () {
  return async (dispatch, getState) => {
    const response = await axios.get('https://api.github.com/gists')
    dispatch({ type: SHOW_GISTS, payload: response.data })
  }
}
