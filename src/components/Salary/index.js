import React from 'react';
import './index.css';

/**
 * Fieldset с зарплатой
 * props = {salary - зарплата
 * timetable - main сейчас timetable
 * } 
 */
function Salary(props) {

	return (
		<div className='SalaryDiv'>
			<span>Я заработаю:</span>
			<span>
				<span className='Salary'>
					{props.salary}
				</span>
				<span>руб.</span>
			</span>
		</div>
	);


}

export default Salary;