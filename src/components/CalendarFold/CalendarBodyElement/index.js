import React from 'react';
import './index.css';

/**
 * Ячейка календаря
 * props = {date, - дата в ячейке
 * dayInfo{
 *  selectedWork, - выбран ли рабочий дни
 *  selectedClean, - выбран ли день уборки
 *	disabledWork, - disabled ли рабочий дни
 *	disabledClean - disabled ли день уборки
 *		}} - активна ли ячейка;
 */
function CalendarBodyElement(props) {
	return (
		<div className='CalendarBodyElement'>
			<input
				type='checkbox'
				id={'date-checkbox-' + props.date}
				hidden
				disabled={props.dayInfo.disabledWork}
				checked={props.dayInfo.selectedWork}
				className='date-checkbox'
				data-date={props.date}
				onChange={props.onChange}
				readOnly={props.timetable}
			/>

			<label
				htmlFor={'date-checkbox-' + props.date}
				className='date-label'
			>
				{props.date}
			</label>

			<input
				type='checkbox'
				id={'cleaning-checkbox-' + props.date}
				hidden
				disabled={props.dayInfo.disabledClean}
				checked={props.dayInfo.selectedClean}
				className='cleaning-checkbox'
				data-date={props.date}
				onChange={props.onChange}
				readOnly={props.timetable}
			/>

			<label
				htmlFor={'cleaning-checkbox-' + props.date}
				className='cleaning-label'>
				<i className='fas fa-broom'></i>
			</label>
		</div>
	);
}

export default CalendarBodyElement;