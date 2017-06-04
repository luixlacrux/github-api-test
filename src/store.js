import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

export default createStoreWithMiddleware(rootReducer)
