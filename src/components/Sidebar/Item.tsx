import React from 'react';
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    text: string,
    link: string,
    Icon: any
}

const Item: React.FC<PropsType> = ({text, link, Icon}) => {
    return (
        <div className={s.item}>
            <NavLink to={link} className={({isActive}) => isActive ? s.active : s.item}>
                    <span className={s.wrap}>
                        <Icon fontSize="small"/>
                        <span className={s.string}>{text}</span>
                    </span>
            </NavLink>
        </div>
    );
};

export default Item;