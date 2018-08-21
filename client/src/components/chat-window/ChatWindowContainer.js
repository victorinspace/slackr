import React, { Component } from 'react'

import ChatWindow from './ChatWindow'
import Title from '../Title'
import UsersView from '../users-view/UsersView'

class ChatWindowContainer extends Component {
	render() {
		return (
			<div className="chat-room-container">
				
				<Title />
				<ChatWindow />
				<UsersView />

			</div>
		)
	}
}

export default ChatWindowContainer