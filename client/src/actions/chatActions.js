import io from 'socket.io-client'
import store from '../store'
import { api } from '../components/Authentication'


const socket = io.connect('http://10.68.0.137:3001/')

socket.on('message', function(data) {
	console.log('message received')
	console.log(data)
	store.dispatch({
		type: 'GET_MESSAGES',
		payload: data
	})
})

export function sendMessage(message) {
	const timestamp = new Date().toLocaleDateString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
	console.log('sending message')
	socket.emit('message', {
		message: message,
		timestamp: timestamp,
		username: api.getProfile().username
	})
}

export function signIn(name) {
	socket.emit('sign in', name)
}

export function registerUser(user) {
	api.post('/api/register', user).then(data => {
		console.log('data:', data)
		// if (regsitratinworks) {
		// 	go to login
		// } 
	})
}