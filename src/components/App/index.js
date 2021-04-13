import React from 'react';
import MainCalendar from '../MainCalendar';
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
		}

		this.handlerChangeMainNav = this.handlerChangeMainNav.bind(this);
	}

	handlerChangeMainNav(e) {
		let link = e.target;
		let main = link.dataset.link;
		if (!main) { return; } // Пользлватель нажал на ul, а не на li
		this.setState({
			main: main,
		})
	}

	render() {
		let main;
		let header = (<Header onClickNav={this.handlerChangeMainNav} main={this.state.main} />);
		switch (this.state.main) {
			case 'map':
				main = (<MainCalendar timetable={false} />);
				break;
			case 'timetable':
				main = (<MainCalendar timetable={true} />);
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
