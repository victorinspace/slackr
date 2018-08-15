import React, { Component } from 'react'

import ChatLogView from './ChatLogView'
import TypeField from './TypeField'
import Title from '../Title'

class ChatWindow extends Component {
	render() {
		return (
			<div className="chat-room-container">
				
				<Title />
				<ChatLogView />
				<TypeField />

			</div>
		)
	}
}

export default ChatWindow