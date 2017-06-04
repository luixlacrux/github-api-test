import { SHOW_GISTS } from '../actions'

const initialState = {
  list: []
}

export function showGists(state = initialState, action) {
  switch (action.type) {
    case SHOW_GISTS:
      return Object.assign({}, state, { list: action.payload })
    default:
      return state
  }
}
