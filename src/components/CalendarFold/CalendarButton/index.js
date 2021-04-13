import React from 'react';
import './index.css'

/**
 * Кнопка управления календарём 
 * props = {text, onclick} - текст на кнопке, обработчик клика
 */
function CalendarButton(props) {
	return (
		<button type='button' className='CalendarButton' onClick={props.onClick}>{props.text}</button>
	);
}

export default CalendarButton;