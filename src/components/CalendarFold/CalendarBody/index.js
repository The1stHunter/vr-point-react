import React from 'react';
import CalendarBodyElement from '../CalendarBodyElement';
import './index.css';


/**
 * Тело каледнаря
 * props = {
 *	daysBefore, - дней до начала месяца
 *	daysAfter, - дней после окончания месяца
 *	days: [{selectedWork, -  выбран ли рабочий дни
 *			selectedClean, - выбран ли день уборки
 *			today, - является ли день сегодняшним
 *          readonly, - можно ли измегять этот день
 *		}, {...}, {...}, {...}],
 * }
 * }
 */
const CalendarBody = (props) => {


	return (<div className='CalendarBody'>
		{[...Array(props.daysBefore)].map((item, index) => <div key={index}></div>)}

		{props.days.map((item, index) => {
			return (
				<CalendarBodyElement
					key={index}
					date={index + 1}
					selectedWork={item.selectedWork}
					selectedClean={item.selectedClean}
					today={item.today}
					readonly={item.readonly}
					onChange={props.onChange}
				/>
			);
		}
		)}

		{[...Array(props.daysAfter)].map((item, index) => <div key={index}></div>)}
	</div>);
};


export default CalendarBody;