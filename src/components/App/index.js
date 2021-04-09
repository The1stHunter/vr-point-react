import React from 'react';
import MainMap from '../MainMap';
import MainTimetable from '../MainTimetable';
import Navigation from '../Navigation';
import { Helmet } from 'react-helmet';
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			main: 'map',
			title: 'Карта возможности',
		}

		this.handlerChangeMain = this.handlerChangeMain.bind(this);
	}

	handlerChangeMain(e) {
		let link = e.target;
		let main = link.dataset.link;
		if (!main) { return; } // Пользлватель нажал на ul, а не на li
		this.setState({
			main: main,
		})
	}

	render() {
		let main;
		switch (this.state.main) {
			case 'map':
				main = (<MainMap />);
				break;
			case 'timetable':
				main = (<MainTimetable />);
				break;
			default:
				break;
		}
		return (
			<div className='App'>
				<Helmet title={this.state.title} />
				<Navigation onChange={this.handlerChangeMain} />
				{main}
			</div>
		);
	}
}

export default App;