import React, { Component } from 'react'

import createReduxStore from './store/CreateStore'

class Main extends Component {
  renderApp () {
    const initialState = window.__INITIAL_STATE__
    const store = createReduxStore(initialState)
  }

  render () {
    return this.renderApp()
  }
}

export default Main
