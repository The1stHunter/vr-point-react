import React from 'react';
import './index.css';

/**
 * props = {user - имя и фамилия пользователя
 * }
 */
function User(props) {
	return (
		<div className='User'>
			<div className='user-name'>{props.user}</div>
			<div className='avatar'></div>
		</div>
	);
}

export default User;