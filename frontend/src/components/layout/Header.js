import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Header = (props) => {

	useEffect(() => {
		let dropdowns = document.querySelectorAll('.dropdown-trigger');
		let options = {
			hover: false, // Activate on click
			coverTrigger: false, // Displays dropdown below the button
		}

		M.Dropdown.init(dropdowns, options);
	})

	return (
		<div>
			<ul id="dropdown1" class="dropdown-content">
				<li><Link to='/action/'>Action</Link></li>
				<li><Link to='/action/'>Sci-fi</Link></li>
				<li><Link to='/action/'>Horror</Link></li>
			</ul>
			<nav>
				<div className="nav-wrapper">
					<Link to='/' className="brand-logo left">Movie Catalogue</Link>
					<ul id="nav-mobile" className="right">
						<li>
							<Link className='dropdown-trigger' data-target="dropdown1">
								Genres
						<i class="material-icons right">arrow_drop_down</i>
							</Link>
						</li>
						<li><Link to='/login'>Login</Link></li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Header;