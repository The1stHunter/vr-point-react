import React from 'react';
import './index.css';

// props = {
// onChange
// timetable}
const CalendarHeader = (props) => {
	if (!props.timetable) {
		return (
			<div className='CalendarHeader' onChange={props.onChange}>
				<div>
					<input data-weekday='1' type='checkbox' id='mon-checkbox' hidden></input>
					<label htmlFor="mon-checkbox">ПН</label>
				</div>
				<div>
					<input data-weekday='2' type='checkbox' id='tue-checkbox' hidden></input>
					<label htmlFor="tue-checkbox">ВТ</label>
				</div>
				<div>
					<input data-weekday='3' type='checkbox' id='wed-checkbox' hidden></input>
					<label htmlFor="wed-checkbox">СР</label>
				</div>
				<div>
					<input data-weekday='4' type='checkbox' id='thu-checkbox' hidden></input>
					<label htmlFor="thu-checkbox">ЧТ</label>
				</div>
				<div>
					<input data-weekday='5' type='checkbox' id='fri-checkbox' hidden></input>
					<label htmlFor="fri-checkbox">ПТ</label>
				</div>
				<div>
					<input data-weekday='6' type='checkbox' id='sat-checkbox' hidden></input>
					<label htmlFor="sat-checkbox">СБ</label>
				</div>
				<div>
					<input data-weekday='7' type='checkbox' id='sun-checkbox' hidden></input>
					<label htmlFor="sun-checkbox">ВС</label>
				</div>
			</div>
		)
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