import React, { Component } from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll.js';
import './app.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			catfriends: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			// .then(response => {return response.json();})
			.then(users => this.setState({ catfriends: users }));
			// .then(users => {this.setState({ catfriends: users })});
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({searchfield: event.target.value})
		// console.log(filterCats);
	}

	render() {
		const { catfriends, searchfield } = this.state;
		const filterCats = catfriends.filter(friend => {
			return friend.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		
		return !catfriends.length ?
			<h1 className='f1 tc'>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>Cat Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList catfriends={filterCats} />
					</Scroll>
				</div>
			);
		}
	}

export default App;