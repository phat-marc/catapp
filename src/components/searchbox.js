import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	console.log('SearchBox');
	return (
		<div className='pa2'>
			<input 
				aria-label='Search Cats'
				className='pa2 ba b--green bg-lightest-blue' 
				type='search' placeholder='search for cat friends' 
				onChange={searchChange} />	
		</div>
	);
}

export default SearchBox;