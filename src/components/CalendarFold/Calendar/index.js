import React from 'react';
import CalendarBody from '../CalendarBody';
import CalendarButtonsPlank from '../CalendarButtonsPlank'
import './index.css';

/**
 * Fieldset с календарём
 * props = {
 *  daysBefore, - дней до начала месяца
 *	daysAfter, - дней после окончания месяца
 *	days: [{selectedWork, -  выбран ли рабочий дни
 *			selectedClean, - выбран ли день уборки
 *			today, - является ли день сегодняшним
 *          readonly, - можно ли измегять этот день
 *		}, {...}, {...}, {...}],
 * nextMonth, prevMonth - функции переключения календаря
 * onChangeCalendar - функция обрабатывающая изменения в календаре
 * onChangeAlwaysClean - функция обрабатывающая изменения allwaysCleanCheckbox
 * }
 */
function CalendarFieldset(props) {
	return (
		<div className="CalendarFieldset">
			<CalendarButtonsPlank
				next={props.nextMonth}
				prev={props.prevMonth}
				year={props.year}
				month={props.month}
				onChangeAlwaysClean={props.onChangeAlwaysClean}
				timetable={props.timetable}
			/>
			<CalendarBody calendarInfo={props.calendarInfo}
				daysBefore={props.daysBefore}
				daysAfter={props.daysAfter}
				days={props.days}
				onChange={props.onChangeCalendar}
			/>
		</div>
	);
}

export default CalendarFieldset;