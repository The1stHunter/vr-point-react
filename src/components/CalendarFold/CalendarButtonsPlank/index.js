import React from 'react';
import CalendarButton from '../CalendarButton';
import './index.css';

/**
 * Планка управления
 * props = {next, prev, - функции переключения месяца
 * year, month - год и месяц
 * onChangeAlwaysClean - функция обрабатывающая изменения allwaysCleanCheckbox
 * timetable - main сейчас timetable
 * isAdmin
 * }
 */
const CalendarButtonsPlank = (props) => {
	const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

	let button;
	if (!props.timetable) {
		button = (
			<div className='cleanTypeSelector'>
				<input type='checkbox' id='auto-clean-checkbox' onChange={props.onChangeAlwaysClean}></input>
				<label htmlFor='auto-clean-checkbox'><span>Хочу убираться</span><span>во все рабочие дни</span></label>
			</div>
		);
	}

	return (
		<div className='CalendarButtonsPlank'>
			<div className='monthSelector'>
				<CalendarButton text={<i className="fas fa-chevron-left"></i>} onClick={props.prev} />
				<span>{months[props.month] + ' ' + props.year}</span>
				<CalendarButton text={<i className="fas fa-chevron-right"></i>} onClick={props.next} />
			</div>
			{button}
		</div>
	)
};

export default CalendarButtonsPlank;