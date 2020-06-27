import * as React from 'react';

interface ISrchBxProps {
	searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISrchBxProps) => {
// const SearchBox = ({ searchfield, searchChange }) => {
	// console.log('SearchBox');
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