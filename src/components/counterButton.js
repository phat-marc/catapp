// import React, { PureComponent } from 'react';
import React, { Component } from 'react';

// class CounterButton extends PureComponent {
class CounterButton extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	} 
	// shouldComponentUpdate and Pure Components do similar, 
	// but Pure is shallow, and Should is performance heavy if over used
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count !== nextState.count) {
			return true;
		}
		return false;
	}

// moving this into the render. this here is a seperate method
	// updateCount = () => {
	// 	this.setState(state => {
	// 		return {count: state.count + 1}
	// 	})
	// }

	render() {
		console.log('CounterButton');
		return (
			<button 
			id='counter' 
			color={this.props.color} 
			onClick={() => this.setState(state => ({count: state.count + 1}))}>
				Count: {this.state.count}
			</button>
			)
	}
}

export default CounterButton;