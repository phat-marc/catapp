import { apiCall } from './api/api';
import { 
	CHANGE_SEARCHFIELD, 
	REQUEST_CATS_PENDING, 
	REQUEST_CATS_SUCCESS,
	REQUEST_CATS_FAILED
} from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCHFIELD,
	payload: text
})

// This is don't work cause, it is a higher order function and needs thunk middleware to run the asynchronous function dispatch
// export const requestCats = (dispatch) => {
export const requestCats = () => (dispatch) => {
	dispatch({ type: REQUEST_CATS_PENDING });
	apiCall('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		.then(data => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }))
}
