import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Redirect } from 'react-router-dom'
import { registerUser } from '../../actions/chatActions'

class Registration extends Component {
	state = {
		redirectToReferrer: false,
		username: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
		registerUser({
			username: this.state.username,
			password: this.state.password
		}, () => {
			this.props.signin(this.state.username, this.state.password, () => {
				this.setState({
					redirectToReferrer: true
				})		
			})
		})
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to='/chatwindow' />
    } else {
			return (
				<div className="registration-window-container">
					
					<h3 className="page-title">Create Your Account</h3>

					<form className="registration-form-container" onSubmit={this.handleSubmit}>
						<input className="register-username" type="text" 
										value={this.state.username} onChange={this.handleChange} 
										name="username" placeholder="Username"  />
						<input className="register-password" type="password" 
										value={this.state.password} onChange={this.handleChange} 
										name="password" placeholder="Password" />
						<button className="create-username-button" type="submit" onClick={this.handleSubmit}>Create</button>
					</form>

				</div>
			)
		}
	}
}

export default withAuth(Registration)
