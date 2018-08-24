import React, { Component } from 'react'
import { sendMessage } from '../../actions/chatActions'
import { connect } from 'react-redux'
import { withAuth } from '../Authentication'
import { EmojiConvertor } from 'emoji-js'
import EmojiPicker from 'emoji-picker-react'

class ChatWindow extends Component {
	state = {
		text: '',
		renderEmoji: false
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
			text: '',
			renderEmoji: false
		})
	}

	logout = (e) => {
    this.props.signout()
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

  toggleEmoji = (e) => {
  	this.setState({
  		renderEmoji: !this.state.renderEmoji
  	})
  }

  getEmoji = (code, data) => {
  	let emoji = new EmojiConvertor()
  	let output = emoji.replace_colons(`:${data.name}:`)
  	this.setState({
  		text: this.state.text + ' ' + output,
  		renderEmoji: false
  	})
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
					<button className="emojiButton" type="button" onClick={this.toggleEmoji}>
						:D
					</button>
					<div>
						{this.state.renderEmoji ? <EmojiPicker onEmojiClick={this.getEmoji} /> : ''}
					</div>
				</form>

					<button className="logout-button" onClick={this.logout}>Logout</button>
				
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