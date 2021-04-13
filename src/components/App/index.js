import React from 'react';
import MainCalendar from '../MainCalendar';
import Header from '../HeaderFold/Header';
import { Helmet } from 'react-helmet';
import './index.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		let now = new Date();
		this.state = {
			main: 'timetable',
			title: 'График',
			calendarInfo: cashedCreateCalendarProps(now.getMonth(), now.getFullYear()),
			salary: this.countSalary(cashedCreateCalendarProps(now.getMonth(), now.getFullYear()).days),
			alwaysClean: false,
			timetable: props.timetable,
		}


		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
		this.handlerChangeCalendar = this.handlerChangeCalendar.bind(this);
		this.handlerChangeAlwaysClean = this.handlerChangeAlwaysClean.bind(this);
		this.handlerChangeMainNav = this.handlerChangeMainNav.bind(this);
	}

	// Перключение вкладок
	handlerChangeMainNav(e) {
		let link = e.target.closest('li');
		let main = link.dataset.link;
		if (!main) { return; } // Пользлватель нажал на ul, а не на li
		this.setState({
			main: main,
		})
	}

	// Функции переключения месяца
	nextMonth() {
		this.setState(function (state, props) {
			let { month, year } = state.calendarInfo;
			if (++month === 12) {
				month = 0;
				year++;
			}
			let newState = {};
			newState.calendarInfo = cashedCreateCalendarProps(month, year);
			newState.salary = this.countSalary(newState.calendarInfo.days);
			return newState;
		});
	}

	prevMonth() {
		this.setState(function (state, props) {
			let { month, year } = state.calendarInfo;
			if (--month === -1) {
				month = 11;
				year--;
			}
			let newState = {};
			newState.calendarInfo = cashedCreateCalendarProps(month, year);
			newState.salary = this.countSalary(newState.calendarInfo.days);
			return newState;
		});
	}

	// Изменение checkbox уборки (правый верхний угол)
	handlerChangeAlwaysClean(e) {
		this.setState((state) => {
			let newState = Object.assign({}, state);
			newState.alwaysClean = !state.alwaysClean;

			if (newState.alwaysClean) {
				newState.calendarInfo.days = state.calendarInfo.days.map(day => {
					let newDay = Object.assign({}, day);
					if (newDay.selectedWork && !newDay.readonly) { newDay.selectedClean = true; }
					return newDay;
				});
			}

			newState.salary = this.countSalary(newState.calendarInfo.days);
			return newState;
		});
	}

	// Обработка клика по календарю
	handlerChangeCalendar(e) {
		let target = e.target;
		switch (target.className) {
			case 'date-checkbox':
				this.setState((state, props) => {
					let newState = Object.assign({}, state);
					let index = target.dataset.date - 1;
					newState.calendarInfo.days[index].selectedWork = !newState.calendarInfo.days[index].selectedWork;
					if (newState.calendarInfo.days[index].selectedWork) {
						if (newState.alwaysClean) {
							newState.calendarInfo.days[index].selectedClean = true;
						}
					} else {
						newState.calendarInfo.days[index].selectedClean = false;
					}
					newState.salary = this.countSalary(newState.calendarInfo.days);
					return newState;
				});
				break;
			case 'cleaning-checkbox':
				this.setState((state, props) => {
					let newState = Object.assign({}, state);
					let index = target.dataset.date - 1;
					newState.calendarInfo.days[index].selectedClean = !newState.calendarInfo.days[index].selectedClean;
					newState.salary = this.countSalary(newState.calendarInfo.days);
					return newState;
				});
				break;
			default:
				return;
		}
	}

	// Подсчёт зарплаты
	countSalary(days) {
		const workSalary = 1500; // Возможно потом получать данные с сервера
		const cleanSalary = 200;
		return days.reduce((previous, current) => {
			return previous + current.selectedWork * workSalary + current.selectedClean * cleanSalary;
		}, 0);
	}

	render() {
		let mainCalndar = (
			<MainCalendar
				timetable={this.state.main === 'timetable'}
				salary={this.state.salary}
				calendarInfo={this.state.calendarInfo}
				nextMonth={this.nextMonth}
				prevMonth={this.prevMonth}
				alwaysClean={this.state.alwaysClean}
				handlerChangeCalendar={this.handlerChangeCalendar}
				handlerChangeAlwaysClean={this.handlerChangeAlwaysClean}
			/>
		);
		let header = (<Header onClickNav={this.handlerChangeMainNav} main={this.state.main} />);

		let main;
		switch (this.state.main) {
			case 'map':
				main = mainCalndar;
				break;
			case 'timetable':
				main = mainCalndar;
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


/**
 * 
 * @param {Number} month 
 * @param {Number} year
 * Создаём объект содержащий всю информацию о календаре
 */
function createCalendarProps(month, year, timetable) {
	let maxDate = new Date(year, month + 1, 0).getDate(); //Полседнее число месяца (кол-во дней в месяце)
	let days = Array(maxDate).fill(null).map((value, index) => index); // список дней месяца
	let selectedWork = [1, 2, 6, 8, 9, 13, 15, 16, 20, 22, 23, 27, 29, 30]; //TODO: запрос к серверу
	let selectedClean = [2, 9, 16, 23, 30]; //TODO: запрос к серверу

	this.month = month;
	this.year = year;
	this.daysBefore = (new Date(year, month, 1).getDay() || 7) - 1;
	this.daysAfter = 7 - (new Date(year, month + 1, 0).getDay() || 7);
	this.days = days.map(value => {
		return {
			selectedWork: selectedWork.includes(value + 1),
			selectedClean: selectedClean.includes(value + 1),
			readonly: new Date(year, month, value + 1) <= new Date() || timetable, // Нельзя изменять прошедшие дни и график
			today: (new Date().getFullYear() === year && new Date().getMonth() === month && new Date().getDate() === value + 1),
		};
	});
}


function cashedDecorator(f) {
	let cash = new Map();

	return function () {
		let key = createKey(...arguments);
		if (!cash.has(key)) {
			cash.set(key, new f(...arguments));
		}
		return cash.get(key);
	}

	function createKey(...args) {
		return args.join('-');
	}
}

const cashedCreateCalendarProps = cashedDecorator(createCalendarProps);