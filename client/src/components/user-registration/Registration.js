import React, { Component } from 'react'
import { register } from '../../actions/chatActions'

class Registration extends Component {
	state = {
		username: '',
		password: ''
	}

	handleChange = (e) => {
		e.preventDefault()
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div className="registration-window-container">
				
				<h3 className="page-title">Create Your Account</h3>
				<form>
					<input className="register-username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username"  />
					<input className="register-email" type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
					<button className="create-username-button" onClick={this.register}>Create</button>
				</form>

			</div>
		)
	}
}

export default Registration