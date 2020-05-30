import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCats } from '../actions';

// For testing we remove these and add mainpage
// import CardList from '../components/cardlist';
// import SearchBox from '../components/searchbox';  
// import Scroll from '../components/scroll';
// import Header from '../components/header';
import MainPage from '../components/mainPage';

import './app.css';

// import { searchCats, catfriends } from '../reducers';

const mapStateToProps = (state) => {
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
		onRequestCats: () => dispatch(requestCats(dispatch))
	}
}

class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		catfriends: [],
	// 	}
	// }

//take out for testing
	// componentDidMount() {
	// 	this.props.onRequestCats();
		// these were taken out before testing
		// console.log(this.props.store.getState());
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => this.setState({ catfriends: users }));
	// }

	// onSearchChange = (event) => {
		// console.log(event.target.value);
		// this.setState({searchfield: event.target.value})
		// console.log(filterCats);
	// }

	render() {
		// for testing we remove this and just render mainpage
		// const { searchField, onSearchChange, catfriends, isPending } = this.props
		// const filterCats = catfriends.filter(friend => {
		// 	return friend.name.toLowerCase().includes(searchField.toLowerCase());
		// })
		// return isPending ?
		// 	<h1 className='f1 tc'>Loading...</h1> :
		// 	(
		// 		<div className='tc'>
		// 			<Header />
		// 			<SearchBox searchChange={onSearchChange} />
		// 			<Scroll>
		// 				<CardList catfriends={filterCats} />
		// 			</Scroll>
		// 		</div>
		// 	);
			return <MainPage { ...this.props } />
		}
	}

// technicaly speaking this here is rendering connect which wraps the app component. So it 
// does not render app component directly
export default connect(mapStateToProps, mapDispatchToProps)(App);