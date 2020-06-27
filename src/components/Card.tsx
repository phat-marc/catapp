import * as React from 'react';
import { ICat } from '../containers/App';

const Card: React.SFC<ICat> = ({ id, name, email }) => {
	// destructuring works like this or just do it direct above instead of props
	// const { id, name, email } = props;
	return (
		<div className='catcard tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>	
			<img alt='robot profile' src={`https://robohash.org/${id}?set=set4&size=150x150`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;