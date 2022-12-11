import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return (
        <div className={s.wrapper}>
            <div>Friends Online</div>
            <div className={s.friends}>
                {props.friends.map((f, i) => <Friend avatar={f.avatar} name={f.name} key={i}/>)}
            </div>
        </div>
    );
};

export default Friends;