import React from 'react';
import Calendar from '../Calendar';
import CalendarButtonsPlank from '../CalendarButtonsPlank'
import './index.css';

/**
 * Fieldset с календарём
 * props = {calendarInfo - информация о текущем месяце
 * nextMonth, prevMonth - функции переключения календаря
 * onChangeCalendar - функция обрабатывающая изменения в календаре
 * onChangeAlwaysClean - функция обрабатывающая изменения allwaysCleanCheckbox
 * timetable - main сейчас timetable
 * onChangeCalendarHeader - клик по дням недели
 * }
 */
function CalendarFieldset(props) {
	let legend = props.timetable ? 'Твой график:' : 'Я хочу работать:';
	return (
		<fieldset className="CalendarFieldset">
			<legend>{legend}</legend>
			<CalendarButtonsPlank
				next={props.nextMonth}
				prev={props.prevMonth}
				year={props.calendarInfo.year}
				month={props.calendarInfo.month}
				onChangeAlwaysClean={props.onChangeAlwaysClean}
				timetable={props.timetable}
			/>
			<Calendar calendarInfo={props.calendarInfo}
				onChange={props.onChangeCalendar}
				timetable={props.timetable}
				onChangeCalendarHeader={props.onChangeCalendarHeader}
			/>
		</fieldset>
	);
}

export default CalendarFieldset;