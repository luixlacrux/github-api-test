import { combineReducers } from 'redux'
import { fetchGists } from './gists'

const rootReducer = combineReducers({
  gists: fetchGists
})

export default rootReducer
