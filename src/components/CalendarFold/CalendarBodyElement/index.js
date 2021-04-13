import React from 'react';
import './index.css';

/**
 * Ячейка календаря
 * props = {date, - дата в ячейке
 *  selectedWork, - выбран ли рабочий дни
 *  selectedClean, - выбран ли день уборки
 *  today - является ли день сегодняшним
 *  readonly - является ли дата readonly
}
 */
function CalendarBodyElement(props) {
	let className = 'CalendarBodyElement ' + (props.today ? 'today' : '');
	let hiddenCleanClass = !props.selectedWork ? 'hidden' : ''; // когда день не выбран как рабочий, убираться нельзя

	return (
		<div className={className} >
			<input
				type='checkbox' // тип
				id={'date-checkbox-' + props.date} // id для label
				hidden // скрытое, так как нажатие происходит по label
				checked={props.selectedWork} // выбрана ли дата
				className='date-checkbox' // имя класса, испльзуется в css
				data-date={props.date} // дата соответствующая этому checkbox
				readOnly={props.readonly} // во вкладке график нельзя ничего редактировать, как и прошедшие дни
				onChange={!props.readonly ? props.onChange : null}
			/>

			<label
				htmlFor={'date-checkbox-' + props.date}
				className='date-label'
			>
				{props.date}
			</label>
			<span className='todaySpan'>{props.today ? 'сегодня' : ''}</span>
			<input
				type='checkbox'
				id={'cleaning-checkbox-' + props.date}
				hidden
				checked={props.selectedClean}
				className='cleaning-checkbox'
				data-date={props.date}
				readOnly={props.readonly}
				onChange={props.onChange}
			/>

			<label
				className={hiddenCleanClass + ' cleaning-label'}
				htmlFor={'cleaning-checkbox-' + props.date} >
			</label>
		</div>
	);
}

export default CalendarBodyElement;