import React, { Component } from 'react'
import '../styles/App.css'

import ChatWindowContainer from './chat-window/ChatWindowContainer'
// import LoginPageContainer from './login-page/LoginPageContainer'

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

// <LoginPageContainer />
// <Route exact path="/" comonent={LoginPageContainer} />
// <Route path="/chatwindow" component={ChatWindowContainer} />