import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import { Provider } from 'react-redux'

import ChatWindow from './chat-window/ChatWindow'

class App extends Component {
  render () {
    return (
    	<Provider store={store}>
	      <div>
					
					<ChatWindow />
				
	      </div>
      </Provider>
    )
  }
}

export default App
