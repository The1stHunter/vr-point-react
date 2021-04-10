import React from 'react';
import './index.css';

// props = {
// onChange
// timetable
// weekdaysChecked - список всех выделенных дней недели
// }
const CalendarHeader = (props) => {
	if (!props.timetable) {
		const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
		return (
			<div className='CalendarHeader'>
				{weekdays.map((weekday, index) => {
					return (
						<div key={index + 1}>
							<input data-weekday={index + 1} type='checkbox' id={'weekday-ckeckbox-' + (index + 1)} hidden checked={props.weekdaysChecked[index]} onChange={props.onChange}></input>
							<label htmlFor={'weekday-ckeckbox-' + (index + 1)}>{weekday}</label>
						</div>
					);
				})}
			</div>
		);

	} else {
		return (
			<div className='CalendarHeader'>
				<div>ПН</div>
				<div>ВТ</div>
				<div>СР</div>
				<div>ЧТ</div>
				<div>ПТ</div>
				<div>СБ</div>
				<div>ВС</div>
			</div>
		)
	}

};

export default CalendarHeader;