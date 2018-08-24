import React, { Component } from 'react'

class Login extends Component {
	render() {
		return (
			<div>
				<h3 className="page-title">Log In</h3>
				<form className="login-form-container">
					<input className="login" type="text" placerholder="username" />
					<input className="password" type="password" placerholder="password" />
					<button className="login-button">Login</button>
				</form>
			</div>
		)
	}
}

export default Login