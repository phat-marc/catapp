import { 
	CHANGE_SEARCHFIELD, 
	REQUEST_CATS_PENDING, 
	REQUEST_CATS_SUCCESS,
	REQUEST_CATS_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchCats = (state=initialStateSearch, action={}) => {
	// Remember ternary and switch???
	switch(action.type) {
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state, { searchField: action.payload })
			// return { ...state, { searchField: action.payload } }  same thing as above, just destructured
		default:
			return state;
	}
}

const initialStateCats = {
	isPending: false,
	catfriends: [],
	error: ''
}

export const requestCats =  (state=initialStateCats, action={}) => {
	switch(action.type) {
		case REQUEST_CATS_PENDING:
			return Object.assign({}, state, { isPending: true }) 
		case REQUEST_CATS_SUCCESS:
			return Object.assign({}, state, { catfriends: action.payload, isPending: false })
		case REQUEST_CATS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state;
	}
}