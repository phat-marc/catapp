import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';  
import Scroll from '../components/scroll';
import Header from '../components/header';

import './app.css';

import { setSearchField, requestCats } from '../actions';
// import { searchCats, catfriends } from '../reducers';

const mapStateToProps = state => {
	return {   
		searchField: state.searchCats.searchField,
		catfriends: state.requestCats.catfriends,
		isPending: state.requestCats.isPending
		// error: state.requestCats.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestCats: () => dispatch(requestCats())
	}
}

class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		catfriends: [],
	// 	}
	// }

	componentDidMount() {
		this.props.onRequestCats();
		// console.log(this.props.store.getState());
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => this.setState({ catfriends: users }));
	}

	// onSearchChange = (event) => {
		// console.log(event.target.value);
		// this.setState({searchfield: event.target.value})
		// console.log(filterCats);
	// }

	render() {
		const { searchField, onSearchChange, catfriends, isPending } = this.props
		const filterCats = catfriends.filter(friend => {
			return friend.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1 className='f1 tc'>Loading...</h1> :
			(
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<CardList catfriends={filterCats} />
					</Scroll>
				</div>
			);
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(App);