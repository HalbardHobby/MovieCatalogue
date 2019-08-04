import React from 'react';
import Card from './chunks/Card';

const MovieList = () => {
	return (
		<div className="container">
			<div className="row">
				<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
					title='Avengers: Endgame' />
				<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
					title='Avengers: Endgame' />
				<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
					title='Avengers: Endgame' />
				<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
					title='Avengers: Endgame' />
				<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
					title='Avengers: Endgame' />
				<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
					title='Avengers: Endgame' />
			</div>
		</div>
	);
}

export default MovieList;