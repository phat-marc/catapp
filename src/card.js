import React from 'react';

const card = ({ id, name, email }) => {
	// destructuring works like this or just do it direct above instead of props
	// const { id, name, email } = props;
	return (
		// <h1>Robots & Cats</h1>
		// 
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>	
			<img alt='robot profile' src={`https://robohash.org/${id}?set=set4&size=150x150`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default card;