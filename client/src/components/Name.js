import React, { Component } from 'react'
import { signIn } from '../actions/chatActions'

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
			<div>
				 <form onSubmit={this.handleSubmit}>
						<input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Pick Yo Name, Foo!" />
						<button type="submit">I Plead The Fif</button>
				 </form>
			</div>
		)
	}
}

export default Name