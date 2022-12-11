import React from 'react';
import s from "./OnlineFriend.module.css";

const OnlineFriend = (props) => {
    return (
        <div>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    );
};

export default OnlineFriend;