import React, { Component } from 'react'

import ChatWindow from './ChatWindow'
import Title from '../Title'

class ChatWindowContainer extends Component {
	render() {
		return (
			<div className="chat-room-container">
				
				<Title />
				<ChatWindow />

			</div>
		)
	}
}

export default ChatWindowContainer