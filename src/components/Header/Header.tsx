import React from 'react';
import s from './Header.module.css'
import icon from '../../img/iconW.png'
import {NavLink} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <NavLink to='/profile'><img src={icon} alt=""/></NavLink>
            <div className={s.login}>
                <span className={s.wrap}>
                    {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
                    {props.isAuth ? <LogoutIcon style={{width: "20px", paddingLeft: "5px", cursor: "pointer"}} onClick={props.logout}/> : null}
                </span>
            </div>
        </header>
    );
};

export default Header;