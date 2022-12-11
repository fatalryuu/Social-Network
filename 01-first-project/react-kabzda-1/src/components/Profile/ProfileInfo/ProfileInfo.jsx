import React from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../img/profile_avatar.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.avatar}>
                <img src={avatar} alt=""/>
            </div>
        </div>
    );
};

export default ProfileInfo;