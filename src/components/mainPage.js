import React, { Component } from 'react';

import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';  
import Scroll from '../components/scroll';
// import ErrorBoundry from '../components/errorBoundry';
import Header from '../components/header';

import './mainPage.css';

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestCats();
	}

	filterCats = () => {
		return this.props.catfriends.filter(friend => {
			return friend.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})
	}
	render() {
		const { onSearchChange, catfriends, isPending } = this.props;
		return (
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						{ isPending ? <h1 className='f1 tc'>Loading...</h1> :
							// <ErrorBoundry>
							<CardList catfriends={this.filterCats()} />
							// </ErrorBoundry>
						}
					</Scroll>
				</div>
			);
		}
	}

export default MainPage;