import React, { Component } from 'react'

import Base from './components/Base'
import Routes from './config/routes'

class App extends Component {
  render () {
    return (
      <Base>
        <Routes />
      </Base>
    )
  }
}

export default App
