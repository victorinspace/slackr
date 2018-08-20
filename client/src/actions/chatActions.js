import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://10.68.0.137:3001/')

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

export function signIn(name) {
	socket.emit('sign in', name)
}

export function autoScroll() {
	setInterval(function() {
		this.scrollBy(0, 1000)
	}, 1500)
}