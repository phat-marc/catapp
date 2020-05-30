import { shallow } from 'enzyme';
import React from 'react';
import CardList from './cardlist';
// import renderer from 'react-test-renderer';

it('expect to render cardlist component', () => {
	const mockCatFriends = [
		{
			id: 1,
			name: 'wiggles',
			email: 'wiggle@kitty.com'
		}
	];
	expect(shallow(<CardList catfriends={mockCatFriends}/>)).toMatchSnapshot();
})
// Here we need to pass the mock cats for the test to work correctly