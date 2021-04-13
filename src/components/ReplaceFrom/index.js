import React from 'react';
import User from '../HeaderFold/User';
import './index.css';

/**
 * props = {
 * login - логин текущего пользователя
 * clickDate - день по которому кликнули в графике
 * onClickClose - клик по кнопке закрытия
 * }
 */
class ReplaceForm extends React.Component {
	constructor(props) {
		super(props);

		this.getUsersForThisDay = cashedDecorator(this.getUsersForThisDay);
	}
	/**
	 * Функция возвращает список свободных в этот день людей
	 * На данный момент это заглушка
	 * @param {String} date 
	 * @param {String} user 
	 */
	getUsersForThisDay(date, user) {
		//TODO: запрос к серверу
		const workers = [
			{
				login: 'guest',
				name: 'Константин',
				surname: 'Шилов',
				tel: '89168854271',
			},
			{
				login: 'admin',
				name: 'Анна',
				surname: 'Жданова',
				tel: '89168854271',
			},
			{
				login: 'qqq',
				name: 'Человек',
				surname: 'Прямоходящий',
				tel: '89168854271',
			},
			{
				login: 'www',
				name: 'Человек',
				surname: 'Разумный',
				tel: '89168854271',
			},
			{
				login: 'eee',
				name: 'Человек',
				surname: 'Не очень разумный',
				tel: '89168854271',
			},
			{
				login: 'rrr',
				name: 'Человек',
				surname: 'Кривоходящий',
				tel: '89168854271',
			},
			{
				login: 'ttt',
				name: 'Человек',
				surname: 'За компом сидящий',
				tel: '89168854271',
			},
		]; // Эта инфа лежит на сервере
		let workersWithMap = []; // Работники, которые отметили этот день в карте возможности
		let workersOther = []; // Работники не отметившие этот день в карте возможности

		workers.forEach(worker => {
			if (worker.login === user) { return; }
			if (Math.floor(Math.random() * 2)) {
				workersWithMap.push(Object.assign({}, worker));
			} else {
				workersOther.push(Object.assign({}, worker));
			}
		});

		return { workersWithMap: workersWithMap, workersOther: workersOther };
	}




	render() {
		let { workersWithMap, workersOther } = this.getUsersForThisDay(this.props.clickDate, this.props.login);

		let workersWithMapList = (
			<ul>
				{workersWithMap.map((worker, index) => {
					return (
						<li key={index}>
							<a href={'https://api.whatsapp.com/send?phone=' + worker.tel}><User user={worker.name + ' ' + worker.surname} /></a>
						</li>
					);
				}

				)}
			</ul>
		);

		let workersOtherList = (
			<ul>
				{workersOther.map((worker, index) => {
					return (
						<li key={index}>
							<a href={'https://api.whatsapp.com/send?phone=' + worker.tel}><User user={worker.name + ' ' + worker.surname} /></a>
						</li>
					);
				}

				)}
			</ul>
		);

		return (
			<div className='ReplaceForm'>
				<p>Подберите замену на {this.props.clickDate.split('-')[0]}</p>
				<ul>
					<li>
						Отметили, что могут выйти:
						{workersWithMapList}
					</li>
					<li>
						Не отмечали, что могут выйти:
						{workersOtherList}
					</li>
				</ul>
				<button type='button' className='close' onClick={this.props.onClickClose}>X</button>
			</div>
		);
	}
}

export default ReplaceForm;

function cashedDecorator(f) {
	let cash = new Map();

	return function () {
		let key = createKey(...arguments);
		if (!cash.has(key)) {
			cash.set(key, f(...arguments));
		}
		return cash.get(key);
	}

	function createKey(...args) {
		return args.join('-');
	}
}