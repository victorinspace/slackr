import React, { Component } from 'react'

class Login extends Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" placerholder="username" />
					<input type="password" placerholder="password" />
				</form>
			</div>
		)
	}
}

export default Login