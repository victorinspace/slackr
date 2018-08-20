import React, { Component } from 'react'

import Login from './Login'
import Title from '../Title'

class LoginPageContainer extends Component {
	render() {
		return (
			<div className="login-page-container">
				
				<Title />
				<Login />

			</div>
		)
	}
}

export default LoginPageContainer