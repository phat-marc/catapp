import { 
	CHANGE_SEARCHFIELD, 
	REQUEST_CATS_PENDING, 
	REQUEST_CATS_SUCCESS,
	REQUEST_CATS_FAILED
} from './constants.js';

import * as reducers from './reducers';

describe('searchCats', () => {
	const initialStateSearch ={
		searchField: ''
	}

	it('should return initial state', () => {
		expect(reducers.searchCats(undefined, {})).toEqual({ searchField: ''})
	})

		it('should handle CHANGE_SEARCHFIELD', () => {
		expect(reducers.searchCats(initialStateSearch, {
			type: CHANGE_SEARCHFIELD,
			payload: 'abc'
		})).toEqual({ searchField: 'abc'})
	})
})

describe('requestCats', () => {
	const initialStateCats = {
		catfriends: [],
		isPending: false,
	}

	it('should return initial state', () => {
		expect(reducers.requestCats(undefined, {})).toEqual(initialStateCats)
	})

	it('should handle REQUEST_CATS_PENDING action', () => {
		expect(reducers.requestCats(initialStateCats, {
			type: REQUEST_CATS_PENDING
			// payload: { isPending: true }
		})).toEqual({
			catfriends: [],
			isPending: true
		})
	})

	it('should handle REQUEST_CATS_SUCCESS action', () => {
		expect(reducers.requestCats(initialStateCats, {
			type: REQUEST_CATS_SUCCESS,
			payload: [{ 
				id: '123',
				name: 'test',
				email: 'test@me.com' 
			}]
		})).toEqual({
			catfriends: [{ 
				id: '123',
				name: 'test',
				email: 'test@me.com' 
			}],
			isPending: false
		})
	})

	it('should handle REQUEST_CATS_FAILED action', () => {
		expect(reducers.requestCats(initialStateCats, {
			type: REQUEST_CATS_FAILED,
			payload: 'Noooo!!! :('
		})).toEqual({ 
			error: 'Noooo!!! :(',
			catfriends: [],
			isPending: false
		})
	})
})