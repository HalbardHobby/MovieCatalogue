import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import Modal from '../chunks/Modal';

const Header = props => {

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
			<ul id="dropdown1" className="dropdown-content">
				<li><Link to='/Action/'>Action</Link></li>
				<li><Link to='/Adventure/'>Adventure</Link></li>
				<li><Link to='/Fantasy/'>Fantasy</Link></li>
				<li><Link to='/Sci-Fi/'>Sci-Fi</Link></li>
			</ul>
			<nav>
				<div className="nav-wrapper">
					<Link to='/' className="brand-logo left">Movie Catalogue</Link>
					<ul id="nav-mobile" className="right">
						<li>
							<a className='dropdown-trigger' data-target="dropdown1">
								Genres
						<i className="material-icons right">arrow_drop_down</i>
							</a>
						</li>
						<li><a data-target="loginModal" className="modal-trigger" >Login</a></li>
					</ul>
				</div>
			</nav>
			<Modal modalId="loginModal" />
		</div>
	);
}

export default Header;