import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './counterButton';
// import renderer from 'react-test-renderer';

describe('counterButton', () => {
	it('expect to render counterButton component', () => {
		const mockColor = 'red'
		expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
	})

	// it('expect to render counterButton component', () => {
	// 	const mockColor = 'red'
	// 	const tree = renderer
	// 		.create(<CounterButton color={mockColor}/>)
	// 		.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// })

	it('correctly increments the counter', () => {
		const mockColor = 'red'
		const wrapper = shallow(<CounterButton color={mockColor}/>);
			
		wrapper.find('[id="counter"]').simulate('click');
		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state()).toEqual({ count: 2 });
	})
})