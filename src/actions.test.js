import * as actions from './actions';
import { 
	CHANGE_SEARCHFIELD, 
	REQUEST_CATS_PENDING, 
	REQUEST_CATS_SUCCESS,
	REQUEST_CATS_FAILED
} from './constants.js';

// can see documentation for these
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

describe('actions', () => {

	// ccould also make a mock store and export it so it is avail. to all files but here we don't need to
	const mockStore = configureMockStore([thunkMiddleware]);

	it('should creat action to search cats', () => {
		const text = 'woowoo';
		const expectedAction = {
			type: CHANGE_SEARCHFIELD,
			payload: text
		};
		expect(actions.setSearchField(text)).toEqual(expectedAction) 
	})

// we now need $ npm installl --save-dev redux-mock-store
	it('handle requesting cats API', () => {
		const store = mockStore();
		store.dispatch(actions.requestCats())
		const action = store.getActions();
		// console.log('action', action);
		const expectedAction = {
			type: REQUEST_CATS_PENDING
		};
		expect(action[0]).toEqual(expectedAction) 
	})
})

// go ahead and try testing success and failed
// async testing help: 
// 	nock
//  supertest
