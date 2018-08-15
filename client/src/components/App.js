import React, { Component } from 'react'
import '../styles/App.css'

import ChatWindow from './chat-window/ChatWindow'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Slackr</h1>

				<ChatWindow />
			
      </div>
    )
  }
}

export default App
