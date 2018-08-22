import React, { Component } from 'react'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// Authentication DEMO
import { Authentication, AuthRoute } from './Authentication'
import Login from './Login'

// import LoginPageContainer from './login-page/LoginPageContainer'
import RegistrationContainer from './user-registration/RegistrationContainer'
import ChatWindowContainer from './chat-window/ChatWindowContainer'
import Channels from './chat-rooms/Channels'

// Quick Sign In Functionality
// import Name from './Name'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
    	<Router>
        <Authentication
          redirectUrl='/login'
          defaultRedirect='/chatwindow'
        >
      		<div>
            <Route exact path="/" render={() => (
              <Redirect to="/login" />
            )} /> 
            <Route path="/login" component={Login} />
            <AuthRoute path="/chatwindow" component={ChatWindowContainer} />
            <Route path="/registration" component={RegistrationContainer} />            
            <AuthRoute path="/channels" component={Channels} />
  				</div>
        </Authentication>
			</Router>
      </Provider>
    )
  }
}

export default App

