import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/profile"><img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/vk_icon_135042.png" alt=""/></a>
        </header>
    );
};

export default Header;