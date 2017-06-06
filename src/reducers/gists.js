import { SHOW_GISTS, SHOW_GIST_ITEM } from '../actions'

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

export function showGistItem(state = { data: {} }, action) {
  switch (action.type) {
    case SHOW_GIST_ITEM:
      return {
        data: action.gist,
      }
    default:
      return state
  }
}
