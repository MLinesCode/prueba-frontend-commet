import React from 'react';
import LogoCommet from '../assets/comet.png';
import './header.css';

function Header() {
	return (
		<header>
			<p className='header-title'>Commet</p>
			<div className='header-logo'>
				<img src={LogoCommet} alt={LogoCommet} />
			</div>
		</header>
	);
}

export default Header;
