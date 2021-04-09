import React from 'react';
import CalendarFieldset from '../CalendarFold/CalendarFieldset';
import SalaryFieldset from '../SalaryFieldset';
import './index.css';

class MainTimetable extends React.Component {
	constructor(props) {
		super(props);

		let now = new Date();
		this.state = {
			calendarInfo: cashedCreateCalendarProps(now.getMonth(), now.getFullYear()),
			salary: this.countSalary(cashedCreateCalendarProps(now.getMonth(), now.getFullYear()).days),
		}

		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
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

	render() {
		return (
			<main className='MainTimetable'>
				<CalendarFieldset
					calendarInfo={this.state.calendarInfo}
					nextMonth={this.nextMonth}
					prevMonth={this.prevMonth}
					timetable={true}
				/>
				<SalaryFieldset salary={this.state.salary} timetable={true} />
			</main>
		);
	}
}

export default MainTimetable;


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