import React from 'react';
import './index.css';

/**
 * props = {user - имя и фамилия пользователя
 * }
 */
function User(props) {
	return (
		<div className='User'>
			<div className='Avatar'></div>
		</div>
	);
}

export default User;