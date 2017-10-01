import React, { Component } from 'react'

import createStore from './store/CreateStore'

class Main extends Component {
  renderApp () {
    const initialState = window.__INITIAL_STATE__
    const store = createStore(initialState)
  }

  render () {
    return this.renderApp()
  }
}

export default Main
