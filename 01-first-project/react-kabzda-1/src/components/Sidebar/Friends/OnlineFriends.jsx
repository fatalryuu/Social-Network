import React from 'react';
import s from './OnlineFriends.module.css'
import OnlineFriend from "./Friend/OnlineFriend";

const OnlineFriends = (props) => {
    return (
        <div className={s.wrapper}>
            <div>Friends Online</div>
            <div className={s.friends}>
                {props.friends.map(f => <OnlineFriend avatar={f.avatar} name={f.name} key={f.id}/>)}
            </div>
        </div>
    );
};

export default OnlineFriends;