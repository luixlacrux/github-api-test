import { SHOW_GISTS } from '../actions'

const initialState = { list: [], linkPages: null }

export function showGists(state = initialState, action) {
  switch (action.type) {
    case SHOW_GISTS:
      return {
        list: action.list,
        linkPages: action.linkPages,
      }
    default:
      return state
  }
}
