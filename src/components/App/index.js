import React from 'react';
import MainMap from '../MainMap';
import MainTimetable from '../MainTimetable';
import Header from '../HeaderFold/Header';
import LoginForm from '../LoginForm';
import { Helmet } from 'react-helmet';
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			main: 'login',
			title: 'Вход',
			name: '',
			surname: '',
			isAdmin: '',
			login: '',
		}

		this.handlerChangeMainNav = this.handlerChangeMainNav.bind(this);
		this.handletSubmitLogin = this.handletSubmitLogin.bind(this);
	}

	handlerChangeMainNav(e) {
		let link = e.target;
		let main = link.dataset.link;
		if (!main) { return; } // Пользлватель нажал на ul, а не на li
		this.setState({
			main: main,
		})
	}

	handletSubmitLogin(e) {
		e.preventDefault();
		let form = e.target.form;
		let user = login(form[0].value, form[1].value);
		if (!user) {
			alert('Неверный логин или пароль!');
			return;
		}
		this.setState({
			main: 'timetable',
			title: 'График',
			login: user.login,
			name: user.name,
			surname: user.surname,
			isAdmin: user.admin,
		})

	}

	render() {
		let main;
		let header;
		switch (this.state.main) {
			case 'map':
				header = (<Header onClickNav={this.handlerChangeMainNav} user={this.state.name + ' ' + this.state.surname} />);
				main = (<MainMap isAdmin={this.state.isAdmin} />);
				break;
			case 'timetable':
				header = (<Header onClickNav={this.handlerChangeMainNav} user={this.state.name + ' ' + this.state.surname} />);
				main = (<MainTimetable login={this.state.login} />);
				break;
			case 'login':
				main = (<LoginForm onSumbit={this.handletSubmitLogin} />);
				break;
			default:
				break;
		}
		return (
			<div className='App'>
				<Helmet title={this.state.title} />
				{header}
				{main}
			</div>
		);
	}
}

export default App;


// TODO:
// NB!!!!!
// Все функции являются заглушками, так как серверная часть ещё не готова

function login(username, password) {
	if (username === 'guest' && password === '123') {
		return {
			login: 'guest',
			name: 'Константин',
			surname: 'Шилов',
			admin: false,
		}
	} else if (username === 'admin' && password === 'admin') {
		return {
			login: 'admin',
			name: 'Анна',
			surname: 'Жданова',
			admin: true,
		}
	}
}