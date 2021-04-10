import React from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import User from '../User';
import './index.css'

/**
 * Header
 * props = {
 * onClickNav - обработчик клика по навигации
 * }
 */
class Header extends React.Component {

	render() {
		return (
			<header className='Header'>
				<Logo />
				<User />
				<Navigation onClick={this.props.onClickNav} />
			</header>
		);
	}
}

export default Header