import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://10.68.0.135:3001/')

// dispatch to reducer, then to component
socket.on('message', function(data) {
	console.log('message received')
	store.dispatch({
		type: 'GET_MESSAGES',
		payload: data
	})
})

export function sendMessage(message) {
	console.log('sending message')
	socket.emit('message', {
		message: message
	})
}