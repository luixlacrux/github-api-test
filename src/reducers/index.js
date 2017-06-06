import { combineReducers } from 'redux'
import { showGists, showGistItem } from './gists'

const rootReducer = combineReducers({
  gists: showGists,
  gist: showGistItem,
})

export default rootReducer
