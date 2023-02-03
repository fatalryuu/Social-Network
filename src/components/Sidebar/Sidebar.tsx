import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import ThreePIcon from '@mui/icons-material/ThreeP';

type PropsType = {}

const Sidebar: React.FC<PropsType> = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <AccountCircleIcon fontSize="small"/>
                        <span className={s.string}>Profile</span>
                    </span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <ArticleIcon fontSize="small"/>
                        <span className={s.string}>News</span>
                    </span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <MessageIcon fontSize="small"/>
                        <span className={s.string}>Messages</span>
                    </span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/chat" className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <ThreePIcon fontSize="small"/>
                        <span className={s.string}>Chat</span>
                    </span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <PeopleAltIcon fontSize="small"/>
                        <span className={s.string}>Users</span>
                    </span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <QueueMusicIcon fontSize="small"/>
                        <span className={s.string}>Music</span>
                    </span>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <SettingsIcon fontSize="small"/>
                        <span className={s.string}>Settings</span>
                    </span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;