import React, { Component } from 'react'

import ChatLogView from './ChatLogView'
import TypeField from './TypeField'

class ChatWindow extends Component {
	render() {
		return (
			<div>

				<ChatLogView />

				<TypeField />

			</div>
		)
	}
}

export default ChatWindow