import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import User from '../User';
import './index.css'

/**
 * Header
 * props = {
 * onClickNav - обработчик клика по навигации
 * user - имя и фамилия пользователя
 * }
 */
function Header(props) {
	return (
		<header className='Header'>
			<Logo />
			<User user={props.user} />
			<Navigation onClick={props.onClickNav} />
		</header>
	);
}


export default Header