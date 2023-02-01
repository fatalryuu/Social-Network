import React from 'react';
import s from './Header.module.css'
import icon from '../../img/icon.png'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <NavLink to='/profile'><img src={icon} alt=""/></NavLink>
            <div className={s.login} onDoubleClick={props.logout}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;