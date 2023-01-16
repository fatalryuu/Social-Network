import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../img/user_avatar.jpg'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfileInfo}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e) => {
        if (e.target.files.length)
            savePhoto(e.target.files[0]);
    }

    return (
        <div className={s.profile_info}>
            <div className={s.avatar}>
                <img src={profile.photos.large != null ? profile.photos.large : avatar} alt=""/>
                <div>
                    {isOwner ? <input type="file" onChange={onAvatarSelected}/> : null}
                </div>
            </div>
            <div className={s.info}>
                <div className={s.name}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                {editMode ? <ProfileDataForm profile={profile} setEditMode={setEditMode} saveProfileInfo={saveProfileInfo}/> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    );
};

export default ProfileInfo;