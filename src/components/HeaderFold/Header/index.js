import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import User from '../User';
import './index.css'

/**
 * Header
 * props = {
 * onClickNav - обработчик клика по навигации
 * main - текущая вкладка
 * }
 */
function Header(props) {
	return (
		<header className='Header'>
			<Logo />
			<Navigation onClick={props.onClickNav} main={props.main} />
			<User />
		</header>
	);
}


export default Header