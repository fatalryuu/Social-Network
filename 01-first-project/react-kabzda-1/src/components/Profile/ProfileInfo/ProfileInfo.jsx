import React from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../img/profile_avatar.jpg'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.avatar}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
        </div>
    );
};

export default ProfileInfo;