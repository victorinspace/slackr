import React, { Component } from 'react'
import { signIn } from '../actions/chatActions'

import Title from './Title'

class Name extends Component {
	state = {
		name: ''
	}

	handleSubmit = (e) => {
		signIn(this.state.name)
		this.props.history.push('/chatwindow')
	} 

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div className="login-page-container">
				<Title />
				 <form className="login-form-container" onSubmit={this.handleSubmit}>
						<input className="login" type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Username" />
						<button className="login-button" type="submit">Login</button>
				 </form>
			</div>
		)
	}
}

export default Name