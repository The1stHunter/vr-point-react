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
 * }
 */
function CalendarFieldset(props) {
	return (
		<fieldset className="CalendarFieldset">
			<legend>Я хочу работать:</legend>
			<CalendarButtonsPlank next={props.nextMonth} prev={props.prevMonth} year={props.calendarInfo.year} month={props.calendarInfo.month} onChangeAlwaysClean={props.onChangeAlwaysClean} />
			<Calendar calendarInfo={props.calendarInfo} onChange={props.onChangeCalendar} />
		</fieldset>
	);
}

export default CalendarFieldset;