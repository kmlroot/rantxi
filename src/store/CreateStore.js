import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client/dist/socket.io'

import makeRootReducer from './reducers'

let socket = io('http://localhost:5000', { jsonp: false })
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/')

const log = createLogger({ diff: true, collapsed: true })

function createReduxStore (initialState = {}) {
  const middleware = [thunk, log, socketIoMiddleware]
  const enhancers = []

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  return store
}

export default createReduxStore
