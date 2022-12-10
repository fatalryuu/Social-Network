import React from 'react';
import s from './Friends.module.css'
import nikita from '../../../img/nikita.jpg'
import arseniy from '../../../img/arseniy.jpg'
import nastya from '../../../img/nastya.png'

const Friends = (props) => {
    return (
        <div>
            <div className={s.friends}>Friends</div>
            <div className={s.avatars}>
                <img src={nikita} alt=""/>
                <img src={arseniy} alt=""/>
                <img src={nastya} alt=""/>
            </div>
            <div className={s.names}>
                {props.names}
            </div>
        </div>
    );
};

export default Friends;