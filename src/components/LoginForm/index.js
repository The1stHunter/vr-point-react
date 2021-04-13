import React from 'react';
import './index.css'

/**
 * props = {
 * onSumbit - обработчик события submit
 * }
 */
function LoginForm(props) {
	return (
		<form className='LoginForm'>
			<input type='text' placeholder='Логин'></input>
			<input type='password' placeholder='Пароль'></input>
			<button type='submit' onClick={props.onSumbit}>Войти</button>
		</form>
	);
}

export default LoginForm;