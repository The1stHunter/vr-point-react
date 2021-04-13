import React from 'react';
import CalendarBodyElement from '../CalendarBodyElement';
import './index.css';


/**
 * Тело каледнаря
 * props = {calendarInfo: { - информация о текущем месяце
 * 	month,
 *	year,
 *	daysBefore, - дней до начала месяца
 *	daysAfter, - дней после окончания месяца
 *	days: [{selectedWork, -  выбран ли рабочий дни
 *			selectedClean, - выбран ли день уборки
 *			disabledWork, - disabled ли рабочий дни
 *			disabledClean - disabled ли день уборки
 *		}, {...}, {...}, {...}],
 * }
 * timetable - main сейчас timetable
 * onClickTimetable
 * }
 */
const CalendarBody = (props) => {
	return (<div className='CalendarBody'>
		{[...Array(props.calendarInfo.daysBefore)].map((item, index) => <div key={index}></div>)}

		{props.calendarInfo.days.map((item, index) => {
			return (
				<CalendarBodyElement
					timetable={props.timetable}
					key={index}
					date={index + 1}
					dayInfo={item}
					onChange={props.onChange}
					onClick={props.onClickTimetable}
				/>
			);
		}
		)}

		{[...Array(props.calendarInfo.daysAfter)].map((item, index) => <div key={index}></div>)}
	</div>);
};


export default CalendarBody;