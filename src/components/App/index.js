import React from 'react';
import MainMap from '../MainMap';
import MainTimetable from '../MainTimetable';
import Header from '../HeaderFold/Header';
import { Helmet } from 'react-helmet';
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			main: 'timetable',
			title: 'График',
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
			main: 'map',
			title: 'Карта возможности',
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
