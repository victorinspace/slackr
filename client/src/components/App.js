import React, { Component } from 'react'
import '../styles/App.css'

import ChatWindow from './ChatWindow'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello world</h1>

				<ChatWindow />
			
      </div>
    )
  }
}

export default App
