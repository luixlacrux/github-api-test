import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const logger = createLogger()

const createStoreWithMiddleware = process.env.NODE_ENV !== 'production'
 ? applyMiddleware(thunk, logger)(createStore)
 : applyMiddleware(thunk)(createStore)

export default createStoreWithMiddleware(rootReducer)
