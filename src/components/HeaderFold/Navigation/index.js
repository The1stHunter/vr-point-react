import React from 'react';
import './index.css';

/**
 * Навигация
 * props = {
 * onClick - функция изменения текущец вкладки
 * main - текущая вкладка
 * }
 */
function Navigation(props) {
	let activeLink = {
		timetable: false,
		map: false,
		change: false,
	}

	activeLink[props.main] = true;

	return (
		<ul className='Navigation' onClick={props.onClick}>
			<li data-link='timetable' className={activeLink['timetable'] ? 'this' : ''} ><span>График работы</span></li>
			<li data-link='map' className={activeLink['map'] ? 'this' : ''}><span>Планирование смен</span></li>
			<li data-link='change' className={activeLink['change'] ? 'this' : ''}><span>Обмен сменами</span></li>
		</ul>
	);
}

export default Navigation;