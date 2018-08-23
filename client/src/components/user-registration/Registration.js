import React, { Component } from 'react'
import { registerUser } from '../../actions/chatActions'

class Registration extends Component {
	state = {
		username: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		registerUser({
			username: this.state.username,
			password: this.state.password
		})
		// this.props.history.push('/login')
	}

	render() {
		return (
			<div className="registration-window-container">
				
				<h3 className="page-title">Create Your Account</h3>
				<form onSubmit={this.handleSubmit}>
					<input className="register-username" type="text" 
									value={this.state.username} onChange={this.handleChange} 
									name="username" placeholder="Username"  />
					<input className="register-email" type="password" 
									value={this.state.password} onChange={this.handleChange} 
									name="password" placeholder="Password" />
					<button className="create-username-button" type="submit">Create</button>
				</form>

			</div>
		)
	}
}

export default Registration