import React, { Component } from 'react';
import CardList from './cardlist';
import SearchBox from './searchbox';
import { catfriends } from './catfriends.js';
import './app.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			catfriends: catfriends,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({searchfield: event.target.value})
		// console.log(filterCats);
	}

	render() {
		const filterCats = this.state.catfriends.filter(friend => {
			return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>Cat Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList catfriends={filterCats} />
			</div>
		);
	}
}

export default App;