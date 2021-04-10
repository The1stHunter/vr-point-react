import React from 'react';
import CalendarFieldset from '../CalendarFold/CalendarFieldset';
import SalaryFieldset from '../SalaryFieldset';
import './index.css';

class MainMap extends React.Component {
	constructor(props) {
		super(props);

		let now = new Date();
		this.state = {
			calendarInfo: cashedCreateCalendarProps(now.getMonth(), now.getFullYear()),
			salary: this.countSalary(cashedCreateCalendarProps(now.getMonth(), now.getFullYear()).days),
			alwaysClean: false,
		}

		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
		this.handlerChangeCalendar = this.handlerChangeCalendar.bind(this);
		this.handlerChangeAlwaysClean = this.handlerChangeAlwaysClean.bind(this);
		this.handlerChangeCalendarHeader = this.handlerChangeCalendarHeader.bind(this);
	}

	// Изменение checkbox уборки (правый верхний угол)
	handlerChangeAlwaysClean(e) {
		this.setState((state) => {
			let newState = Object.assign({}, state);
			newState.alwaysClean = !state.alwaysClean;

			if (newState.alwaysClean) {
				newState.calendarInfo.days = state.calendarInfo.days.map(day => {
					let newDay = Object.assign({}, day);
					newDay.disabledClean = true;
					if (newDay.selectedWork) { newDay.selectedClean = true; }
					return newDay;
				});
			} else {
				newState.calendarInfo.days = state.calendarInfo.days.map(day => {
					let newDay = Object.assign({}, day);
					if (!newDay.disabledWork && newDay.selectedWork) {
						newDay.disabledClean = false;
					}
					return newDay;
				});
			}

			newState.salary = this.countSalary(newState.calendarInfo.days);
			return newState;
		});
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

	countSalary(days) {
		const workSalary = 1500; // Возможно потом получать данные с сервера
		const cleanSalary = 200;
		return days.reduce((previous, current) => {
			return previous + current.selectedWork * workSalary + current.selectedClean * cleanSalary;
		}, 0);
	}

	// Обработка клика по форме
	handlerChangeCalendar(e) {
		let target = e.target;
		switch (target.className) {
			case 'date-checkbox':
				this.setState((state, props) => {
					let newState = Object.assign({}, state);
					let index = target.dataset.date - 1;
					newState.calendarInfo.days[index].selectedWork = !newState.calendarInfo.days[index].selectedWork;
					if (newState.calendarInfo.days[index].selectedWork) {
						newState.calendarInfo.days[index].disabledClean = false;
						if (this.state.alwaysClean) {
							newState.calendarInfo.days[index].selectedClean = true;
							newState.calendarInfo.days[index].disabledClean = true;
						}
					} else {
						newState.calendarInfo.days[index].disabledClean = true;
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

	// При клике по названию дня недели выбирает все дни это дня недели
	//TODO: сделать управляемым компоненом
	handlerChangeCalendarHeader(e) {
		let target = e.target;
		let weekday = target.dataset.weekday;
		if (!weekday) { return; } // Пользователь попал по границе элементов

		weekday = weekday % 7; // Превращаем 7 в 0 для работы с Date
		let fidstDayWeekday = new Date(this.state.calendarInfo.year, this.state.calendarInfo.month).getDay(); // день недели первого дня месяца

		let changeDay = (weekday + fidstDayWeekday) % 7; // Это остаток от деления на 7 тех дат, которые соответствут выбранному дню недели

		if (target.checked) {
			this.setState((state) => {
				let newState = Object.assign({}, state);
				newState.calendarInfo.days = state.calendarInfo.days.map((day, index) => {
					if ((index + 1) % 7 !== changeDay) { return day; }
					let newDay = Object.assign({}, day);
					if (!newDay.disabledWork) {
						newDay.selectedWork = true;
						if (state.alwaysClean) { newDay.selectedClean = true; }
					}
					return newDay;
				});
				newState.salary = this.countSalary(newState.calendarInfo.days);
				return newState;
			});
		} else {
			this.setState((state) => {
				let newState = Object.assign({}, state);
				newState.calendarInfo.days = state.calendarInfo.days.map((day, index) => {
					if ((index + 1) % 7 !== changeDay) { return day; }
					let newDay = Object.assign({}, day);
					if (!newDay.disabledWork) {
						newDay.selectedWork = false;
						newDay.selectedClean = false;
					}
					return newDay;
				});
				newState.salary = this.countSalary(newState.calendarInfo.days);
				return newState;
			});
		}
	}



	render() {
		return (
			<main className='Main'>
				<CalendarFieldset
					calendarInfo={this.state.calendarInfo}
					nextMonth={this.nextMonth}
					prevMonth={this.prevMonth}
					onChangeCalendar={this.handlerChangeCalendar}
					onChangeAlwaysClean={this.handlerChangeAlwaysClean}
					onChangeCalendarHeader={this.handlerChangeCalendarHeader}
				/>
				<SalaryFieldset salary={this.state.salary} />
			</main>
		);
	}
}

export default MainMap;


/**
 * 
 * @param {Number} month 
 * @param {Number} year
 * Создаём объект содержащий всю информацию о календаре
 */
function createCalendarProps(month, year) {
	let maxDate = new Date(year, month + 1, 0).getDate(); //Полседнее число месяца (кол-во дней в месяце)
	let days = Array(maxDate).fill(null).map((value, index) => index); // список дней месяца
	let selectedWork = []; //TODO: запрос к серверу
	let selectedClean = []; //TODO: запрос к серверу

	let objectDays = days.map(value => {
		return {
			selectedWork: selectedWork.includes(value),
			selectedClean: selectedClean.includes(value),
			disabledWork: new Date(year, month, value + 1) <= new Date(), // Нельзя изменять прошедшие дни
			disabledClean: (new Date(year, month, value + 1) <= new Date()) || !selectedWork.includes(value),
		}
	});

	return {
		month: month,
		year: year,
		daysBefore: (new Date(year, month, 1).getDay() || 7) - 1,
		daysAfter: 7 - (new Date(year, month + 1, 0).getDay() || 7),
		days: objectDays,
	}
}


function cashedDecorator(f) {
	let cash = new Map();

	return function () {
		let key = createKey(...arguments);
		if (!cash.has(key)) {
			cash.set(key, f(...arguments));
		}
		return cash.get(key);
	}

	function createKey(...args) {
		return args.join('-');
	}
}

const cashedCreateCalendarProps = cashedDecorator(createCalendarProps);
