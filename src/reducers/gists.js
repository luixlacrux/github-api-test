import { FETCH_GISTS } from '../actions'

const initialState = {
  list: []
}

export function fetchGists(state = initialState, action) {
  switch (action.type) {
    case FETCH_GISTS:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state
  }
}
