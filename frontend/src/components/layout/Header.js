import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

	return (
		<nav>
			<div className="nav-wrapper">
				<Link to='/' className="brand-logo left">Movie Catalogue</Link>
				<ul id="nav-mobile" className="right">
					<li><Link to='/genres'>Genres</Link></li>
					<li><Link to='/login'>Login</Link></li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;