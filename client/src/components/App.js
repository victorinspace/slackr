import React, { Component } from 'react'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginPageContainer from './login-page/LoginPageContainer'
import RegistrationContainer from './user-registration/RegistrationContainer'
import ChatWindowContainer from './chat-window/ChatWindowContainer'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      	<Router>
      		<div>
            <Route exact path='/' component={LoginPageContainer} />
            <Route path='/registration' component={RegistrationContainer} />
						<Route path='/chatwindow' component={ChatWindowContainer} />
					</div>
				</Router>
      </Provider>
    )
  }
}

export default App
