import React from 'react';
import CalendarHeader from '../CalendarHeader';
import CalendarBody from '../CalendarBody';
import './index.css';

/**
 * Весь каледнарь
 * props = {calendarInfo - информация о текущем месяце
 * onChangeCalendarHeader - обработчик клика по дням недели
 * } 
 */
const Calendar = (props) => (
	<div className='Calendar'>
		<CalendarHeader onChange={props.onChangeCalendarHeader} timetable={props.timetable} />
		<CalendarBody calendarInfo={props.calendarInfo} onChange={props.onChange} timetable={props.timetable} />
	</div>
);

export default Calendar;