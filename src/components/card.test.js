// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Card from './card.js';
// import renderer from 'react-test-renderer';

// console.log(shallow(<Card />));
// it('expect to render card component', () => {
// 	expect(shallow(<Card />).length).toEqual(1)
// })
// this is a silly test but shows that we can render card component on its own


//snaphot - udemy 
describe('cards', () => {
	it('expect to render card component', () => {
		expect(shallow(<Card />)).toMatchSnapshot()
	})
})
// this creates a folder called snapshots

//snaphot - from jest documentation ***THIS IS not THE WAY***
// it('expect to render card component', () => {
// 	const tree = renderer
// 		.create(<Card />)
// 		.toJSON();
// 	expect(tree).toMatchSnapshot();
// })

// to update 
// 	$ jest --updateSnapshot