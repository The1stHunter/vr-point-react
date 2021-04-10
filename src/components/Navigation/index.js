import React from 'react';
import './index.css';

/**
 * Навигация
 * props = {
 * onClick - функция изменения текущец вкладки
 * }
 */
function Navigation(props) {
	return (
		<ul className='Navigation' onClick={props.onClick}>
			<li data-link='map'>Карта возможности</li>
			<li data-link='timetable'>График</li>
		</ul>
	);
}

export default Navigation;