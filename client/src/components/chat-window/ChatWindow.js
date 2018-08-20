import React, { Component } from 'react'
import { sendMessage } from '../../actions/chatActions'
import { connect } from 'react-redux'


class ChatWindow extends Component {
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

		this.setState({
			text: ''
		})
	}

	render() {
		return (
			<div>
				<div className="chat-log-container">
					{this.props.messages.map( (message, i) => {
						console.log(message)
						return (
							<div key={'message' + i}>
								{message.name}: {message.message}
							</div>
						)
					})}
				</div>

				<form onSubmit={this.handleUserMessage}
							className="type-field-area" >
					<input onChange={this.userMessage}
									type="text" name="text" 
									value={this.state.text}
									placeholder="What's on your mind?" />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		messages: appState.messages
	}
}

export default connect(mapStateToProps)(ChatWindow)