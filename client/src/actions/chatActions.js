import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://10.68.0.135:3000/')

// dispatch to reducer; to component
socket.on('message from chat', (data) => {
	store.dispatch({
		type: 'MESSAGES',
		payload: data
	})
})

export function sendMessage(message) {
	socket.emit('message', {
		message: message
	})
}