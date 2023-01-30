import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {

}

const Sidebar: React.FC<PropsType> = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className = {({isActive}) => isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className = {({isActive}) => isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className = {({isActive}) => isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" className = {({isActive}) => isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className = {({isActive}) => isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className = {({isActive}) => isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;