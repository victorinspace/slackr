import React, { Component } from 'react'
import { sendMessage } from '../../actions/chatActions'
import { connect } from 'react-redux'
import { withAuth } from '../Authentication'

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

	componentWillUpdate() {	
    var node = this.refs.messages
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight <= node.scrollHeight
    console.log(node.scrollTop, node.offsetHeight, node.scrollHeight)
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = this.refs.messages
      node.scrollTop = node.scrollHeight
    }
  }

	render() {
		return (
			<div>
				<div className="chat-log-container" ref="messages">
					{this.props.messages.map( (message, i) => {
						return (
							<div key={'message' + i}>
								<div className="message-name">
									{message.username}<span className="user-message">: {message.message}</span>
								</div>
								<div className="message-timestamp">{message.timestamp}</div> 
							</div>
						)
					})}
				</div>

				<form onSubmit={this.handleUserMessage}
							className="type-field-area" >
					<input onChange={this.userMessage}
									type="text" name="text" 
									value={this.state.text}
									placeholder="..." />
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

export default withAuth(connect(mapStateToProps)(ChatWindow))