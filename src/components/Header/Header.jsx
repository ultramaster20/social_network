import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return <header className={s.header}>
		<img src='https://img2.freepng.ru/20171216/10a/apple-logo-png-5a354ef69ae9f5.1281557315134430626345.jpg' />
		<div className={s.loginBlock} >
			{props.isAuth
				? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
				: <NavLink to='/login'>Login</NavLink>}
		</div>
	</header>;
}

export default Header;