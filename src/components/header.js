import React, { Component } from 'react';
import CounterButton from './counterButton';

class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		console.log('Header');
		return (
			<div>
				<h1 className='f1'>Cat Friends</h1>
				{ <CounterButton color={'blue'} /> }
			</div>
		);
	}
}

export default Header;