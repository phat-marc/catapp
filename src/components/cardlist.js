import React from 'react';
import Card from './card.js';

const cardlist = ({ catfriends }) => {
	return (
		<div> {
			catfriends.map((user, i) => {
				return (
					<Card 
						key={i} 
						id={catfriends[i].id} 
						name={catfriends[i].name} 
						email={catfriends[i].email}
					/>
				);
			})
		} </div>
	);
}

export default cardlist;


// in React, when doing a loop, give it a unique key. So Virtual DOM can org itself
// Here is the other way of writing the exact same as above
// const cardlist = ({ catfriends }) => {
// 	const cardComp = catfriends.map((user, i) => {
// 		return (
// 			<Card 
// 				key={i} 
// 				id={catfriends[i].id} 
// 				name={catfriends[i].name} 
// 				email={catfriends[i].email}
// 			/>
// 		);
// 	})
// 	return (
// 		<div>
// 			{cardComp}
// 		</div>
// 	);
// }

// export default cardlist;

// loop over the objects in catfriends, and create a card component for each one