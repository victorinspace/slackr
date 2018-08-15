const initialState = {
	messages: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'MESSAGES':
			return {...state, messages: action.payload}
		default: 
			return state
	}
}