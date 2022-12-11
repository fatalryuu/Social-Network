import React from 'react';
import s from './Header.module.css'
import icon from '../../img/icon.png'

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/profile"><img src={icon} alt=""/></a>
        </header>
    );
};

export default Header;