import React from 'react';
import Calendar from '../CalendarFold/Calendar';
import SalaryFieldset from '../SalaryFieldset';
import './index.css';


/**
 * props = {
 * timetable - ture: сейчас открыто рассписание, false: сейчас открыта карта возможностей
 * salary - зарплата
 * calendarInfo 
 * nextMonth, prevMonth
 * alwaysClean
 * handlerChangeCalendar
 * handlerChangeAlwaysClean
 * }
 */
function MainMap(props) {
	// // При клике по названию дня недели выбирает все дни это дня недели 
	// handlerChangeCalendarHeader(e) {
	// 	let target = e.target;
	// 	let weekday = target.dataset.weekday;
	// 	if (!weekday) { return; } // Пользователь попал по границе элементов


	// 	this.setState((state) => {
	// 		let newState = Object.assign({}, state);
	// 		newState.weekdaysChecked[weekday - 1] = !state.weekdaysChecked[weekday - 1];

	// 		weekday = weekday % 7; // Превращаем 7 в 0 для работы с Date
	// 		let fidstDayWeekday = new Date(this.state.calendarInfo.year, this.state.calendarInfo.month).getDay(); // день недели первого дня месяца
	// 		let changeDay = (weekday + fidstDayWeekday) % 7; // Это остаток от деления на 7 тех дат, которые соответствут выбранному дню недели

	// 		if (target.checked) {
	// 			newState.calendarInfo.days = state.calendarInfo.days.map((day, index) => {
	// 				if ((index + 1) % 7 !== changeDay) { return day; }
	// 				let newDay = Object.assign({}, day);
	// 				if (!newDay.disabledWork) {
	// 					newDay.selectedWork = true;
	// 					if (state.alwaysClean) { newDay.selectedClean = true; }
	// 				}
	// 				return newDay;
	// 			});
	// 		} else {
	// 			newState.calendarInfo.days = state.calendarInfo.days.map((day, index) => {
	// 				if ((index + 1) % 7 !== changeDay) { return day; }
	// 				let newDay = Object.assign({}, day);
	// 				if (!newDay.disabledWork) {
	// 					newDay.selectedWork = false;
	// 					newDay.selectedClean = false;
	// 					newDay.disabledClean = true;
	// 				}
	// 				return newDay;
	// 			});
	// 		}
	// 		newState.salary = this.countSalary(newState.calendarInfo.days);
	// 		return newState;
	// 	});
	// }

	return (
		<main className='Main'>
			<Calendar
				nextMonth={props.nextMonth}
				prevMonth={props.prevMonth}
				onChangeCalendar={props.handlerChangeCalendar}
				onChangeAlwaysClean={props.handlerChangeAlwaysClean}
				daysBefore={props.calendarInfo.daysBefore}
				daysAfter={props.calendarInfo.daysAfter}
				days={props.calendarInfo.days}
				year={props.calendarInfo.year}
				month={props.calendarInfo.month}
				timetable={props.timetable}
				allwaysClean={props.alwaysClean}
			/>
			<SalaryFieldset salary={props.salary} />
		</main>
	);
}

export default MainMap;



