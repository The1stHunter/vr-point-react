import React from 'react';
import './index.css'

/**
 * Кнопка управления календарём 
 * props = {text, onclick} - текст на кнопке, обработчик клика
 */
const CalendarButton = (props) => (
	<button type='button' className='CalendarButton' onClick={props.onСlick}>{props.text}</button>
);

export default CalendarButton;