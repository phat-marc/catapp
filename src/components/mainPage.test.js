import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './mainPage';

// I can't get this to work:(
// let wrapper;

// beforeEach(() => {
// 	const mockProps = {
// 		onRequestCats: jest.fn(),
// 		catfreinds: [],
// 		searchField: '',
// 		isPending: false
// 	}
// 	wrapper = shallow(<MainPage { ...mockProps } />)
// })

// it('expect to render mainPage component', () => {
// 	expect(wrapper).toMatchSnapshot();
// })

it('filter cats correctly', () => {
	const mockProps2 = {
		onRequestCats: jest.fn(),
		catfriends: [{
			id: 3,
			name: 'mew',
			email: 'mew@mewmail.com'
		}],
		searchField: 'mew',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage { ...mockProps2 }/>)
	expect(wrapper2.instance().filterCats()).toEqual([{
			id: 3,
			name: 'mew',
			email: 'mew@mewmail.com'
		}]);
	// expect(wrapper2.instance().filterCats()).toEqual([]);
})

it('filter cats correctly again', () => {
	const mockProps3 = {
		onRequestCats: jest.fn(),
		catfriends: [{
			id: 3,
			name: 'mew',
			email: 'mew@mewmail.com'
		}],
		searchField: 'a',
		isPending: false
	}
	const filterCats = []
	const wrapper3 = shallow(<MainPage { ...mockProps3 }/>)
	expect(wrapper3.instance().filterCats()).toEqual(filterCats);
})