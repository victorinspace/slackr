import React, { Component } from 'react'
import { sendMessage } from '../../actions/chatActions'
import { Provider } from 'react-redux'


class TypeField extends Component {

	state = {
		text: ''
	}

	userMessage = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleUserMessage = (e) => {
		e.preventDefault()
		sendMessage(this.state.text)
	}

	render() {
		return (
			<Provider>
				<div>
					<form className="type-field-area" onSubmit={this.handleUserMessage}>
						<input type="text" name="text" placeholder="What you gotta say?" onChange={this.userMessage}/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</Provider>
		)
	}
}

function mapStateToProps(appState) {
	return {
		messages: appState.messages
	}
}

export default TypeField