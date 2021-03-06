import React, { Component } from 'react'

import ChatWindow from './ChatWindow'
import Title from '../Title'
import UsersView from '../users-view/UsersView'
import Channels from '../chat-rooms/Channels'

class ChatWindowContainer extends Component {
	render() {
		return (
			<div className="chat-room-container">
				
				<Title />
				<Channels />
				<ChatWindow />
				<UsersView />
				
			</div>
		)
	}
}

export default ChatWindowContainer