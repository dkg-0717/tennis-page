import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './assets/styles/global-styles.css'

const container = document.getElementById("app")

function render() {
  ReactDOM.render(<App />, container)
}

render()

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}