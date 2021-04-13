import React from 'react';
import './index.css';
import logo from './vr-logo.png';

/**
 * Название компании
 */
function Logo(props) {
	return (
		<div className='Logo'>
			<img src={logo} alt='logo'></img>
		</div>
	);
}

export default Logo;