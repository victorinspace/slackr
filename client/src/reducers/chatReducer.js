const initialState = {
	messages: [],
	name: ''
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'GET_MESSAGES':
			return {...state, messages: [...state.messages, action.payload]}
		default: 
			return state
	}
}