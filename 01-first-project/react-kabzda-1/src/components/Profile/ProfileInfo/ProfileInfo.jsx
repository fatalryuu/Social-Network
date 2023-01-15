import React from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../img/profile_avatar.jpg'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={s.profile_info}>
            <div className={s.avatar}>
                <img src={profile.photos.large != null ? profile.photos.large : avatar} alt=""/>
            </div>
            <div className={s.info}>
                <div className={s.name}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={s.about}>{profile.aboutMe}</div>
                {profile.lookingForAJob ? <div className={s.job}>{profile.lookingForAJobDescription}</div> : null}
            </div>
        </div>
    );
};

export default ProfileInfo;