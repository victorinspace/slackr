const initialState = {
	name: '',
	messages: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'GET_MESSAGES':
			return {...state, messages: [action.payload, ...state.messages]}
		default: 
			return state
	}
}