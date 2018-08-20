import React, { Component } from 'react'

class Registration extends Component {
	render() {
		return (
			<div className="registration-window-container">
				
				<h3>Create Your Account</h3>
				<form>
					<input className="username" type="text" placeholder="Name"  />

					{/* Possibe change to another type of identity proof */}
					<input className="email" type="text" placeholder="email" />
					<button className="create-username-button">Create</button>
				</form>

			</div>
		)
	}
}

export default Registration