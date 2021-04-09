import React from 'react';
import CalendarButton from '../CalendarButton';
import './index.css';

/**
 * Планка управления
 * props = {next, prev, - функции переключения месяца
 * year, month - год и месяц
 * onChangeAlwaysClean - функция обрабатывающая изменения allwaysCleanCheckbox
 * timetable - main сейчас timetable
 * }
 */
const CalendarButtonsPlank = (props) => {
	const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

	let button;
	if (!props.timetable) {
		button = (
			<div>
				<label htmlFor='auto-clean-checkbox'>Хочу убираться во все рабочие дни</label>
				<input type='checkbox' id='auto-clean-checkbox' onChange={props.onChangeAlwaysClean}></input>
			</div>
		);
	}
	return (
		<div className='CalendarButtonsPlank'>
			<div>
				<CalendarButton text={<i className="fas fa-chevron-left"></i>} onСlick={props.prev} />
				<span>{months[props.month] + ' ' + props.year}</span>
				<CalendarButton text={<i className="fas fa-chevron-right"></i>} onСlick={props.next} />
			</div>
			{button}
		</div>
	)
};

export default CalendarButtonsPlank;