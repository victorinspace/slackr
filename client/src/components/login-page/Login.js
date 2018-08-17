import React, { Component } from 'react'

import Title from '../Title'

class Login extends Component {
	render() {
		return (
			<div className="login-page-container">
				<Title />

				<form className="login-form-container">
					<input className="login" type="text" placerholder="username" />
					<input className="password" type="password" placerholder="password" />
					<button className="login-button">Log in</button>
				</form>
			</div>
		)
	}
}

export default Login