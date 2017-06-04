import { combineReducers } from 'redux'
import { showGists } from './gists'

const rootReducer = combineReducers({
  gists: showGists
})

export default rootReducer
