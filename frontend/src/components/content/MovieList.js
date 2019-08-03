import React from 'react';
import Card from './chunks/Card';

const MovieList = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col s6 m4 l3">
					<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
						title='Avengers: Endgame' />
				</div>
				<div className="col s6 m4 l3">
					<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
						title='Avengers: Endgame' />
				</div>
				<div className="col s6 m4 l3">
					<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
						title='Avengers: Endgame' />
				</div>
				<div className="col s6 m4 l3">
					<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
						title='Avengers: Endgame' />
				</div>
				<div className="col s6 m4 l3">
					<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
						title='Avengers: Endgame' />
				</div>
				<div className="col s6 m4 l3">
					<Card image='https://images-na.ssl-images-amazon.com/images/I/81hkRNYQhNL._SY679_.jpg'
						title='Avengers: Endgame' />
				</div>
			</div>
		</div>
	);
}

export default MovieList;