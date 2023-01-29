import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../img/user_avatar.jpg'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string | null
    updateStatus: (status: string | null) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
    saveProfileInfo: (info: ProfileType) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfileInfo}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onAvatarSelected = (e: any) => {
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
                <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                {editMode ? <ProfileDataForm profile={profile} setEditMode={setEditMode} saveProfileInfo={saveProfileInfo}/> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    );
};

export default ProfileInfo;