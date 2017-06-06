import {
  REQUEST_GISTS,
  SHOW_GISTS,
  REQUEST_GIST_ITEM,
  SHOW_GIST_ITEM, } from '../actions'

const initialState = { list: [], linkPages: {}, isFetching: false }

export function showGists(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GISTS:
      return {
        isFetching: true,
      }
    case SHOW_GISTS:
      return {
        list: action.list,
        linkPages: action.linkPages,
        isFetching: false,
      }
    default:
      return state
  }
}

export function showGistItem(state = {
  data: {},
  isFetching: true,
}, action) {
  switch (action.type) {
    case REQUEST_GIST_ITEM:
     return {
       isFetching: true,
     }
    case SHOW_GIST_ITEM:
      return {
        data: action.gist,
        isFetching: false
      }
    default:
      return state
  }
}
