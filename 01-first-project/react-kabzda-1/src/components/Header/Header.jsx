import React from 'react';
import s from './Header.module.css'
import icon from '../../img/icon.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to='/profile'><img src={icon} alt=""/></NavLink>
            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;