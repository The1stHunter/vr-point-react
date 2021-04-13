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
 * main - текущая вкладка
 * }
 */
function Header(props) {
	return (
		<header className='Header'>
			<Logo />
			<Navigation onClick={props.onClickNav} main={props.main} />
			<User user={props.user} />
		</header>
	);
}


export default Header