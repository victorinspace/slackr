import React, { Component } from 'react'
import '../styles/App.css'

import ChatWindowContainer from './chat-window/ChatWindowContainer'

class App extends Component {
  render () {
    return (
      <div>
				<ChatWindowContainer />
      </div>
    )
  }
}

export default App
