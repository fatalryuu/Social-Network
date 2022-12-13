import React from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../img/profile_avatar.jpg'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profile_info}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : avatar} alt=""/>
            </div>
            <div className={s.info}>
                <div className={s.name}>{props.profile.fullName}</div>
                <div className={s.about}>{props.profile.aboutMe}</div>
                {props.profile.lookingForAJob ? <div className={s.job}>{props.profile.lookingForAJobDescription}</div> : null}
            </div>
        </div>
    );
};

export default ProfileInfo;