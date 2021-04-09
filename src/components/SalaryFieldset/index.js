import React from 'react';
import './index.css';

/**
 * Fieldset с зарплатой
 * props = {salary} - зарплата
 */
const SalaryFieldset = (props) => (
	<fieldset className='SalaryFieldset'>
		<legend>Работая в таком графике, ты получишь:</legend>
		<div>
			<div className='Salary'>
				{props.salary}
			</div>
			<span>руб.</span>
		</div>
		<div>
			<button type='submit'>Готово</button>
		</div>
	</fieldset>
);

export default SalaryFieldset;