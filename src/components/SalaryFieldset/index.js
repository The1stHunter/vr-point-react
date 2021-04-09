import React from 'react';
import './index.css';

/**
 * Fieldset с зарплатой
 * props = {salary - зарплата
 * timetable - main сейчас timetable
 * } 
 */
function SalaryFieldset(props) {
	let button;
	if (!props.timetable) {
		button = (
			<div>
				<button type='submit'>Готово</button>
			</div>
		);
	}
	return (
		<fieldset className='SalaryFieldset'>
			<legend>Работая в таком графике, ты получишь:</legend>
			<div>
				<div className='Salary'>
					{props.salary}
				</div>
				<span>руб.</span>
			</div>
			{button}
		</fieldset>
	);


}

export default SalaryFieldset;