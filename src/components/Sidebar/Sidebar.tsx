import React from 'react';
import s from './Sidebar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import ThreePIcon from '@mui/icons-material/ThreeP';
import Item from "./Item";

type PropsType = {}

const Sidebar: React.FC<PropsType> = () => {
    return (
        <nav className={s.nav}>
            <Item text="My profile" link="/profile" Icon={AccountCircleIcon}/>
            <Item text="News" link="/news" Icon={ArticleIcon}/>
            {/*<Item text="Messenger" link="/dialogs" Icon={MessageIcon}/>*/}
            <Item text="Chat" link="/chat" Icon={ThreePIcon}/>
            <Item text="Users" link="/users" Icon={PeopleAltIcon}/>
            <Item text="Music" link="/music" Icon={QueueMusicIcon}/>
            <Item text="Settings" link="/settings" Icon={SettingsIcon}/>
        </nav>
    );
}

export default Sidebar;