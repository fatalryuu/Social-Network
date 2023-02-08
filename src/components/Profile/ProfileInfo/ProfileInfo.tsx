import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import avatar from '../../../img/user_avatar.jpg'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import {ProfileType} from "../../../types/types";
import {useSelector} from "react-redux";
import {getAmountOfFollowed, getProfileIsFetching} from "../../../redux/selectors";
import UploadIcon from '@mui/icons-material/Upload';

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
    let [isEnabled, setIsEnabled] = useState(true);
    const isFetching = useSelector(getProfileIsFetching);
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
                {isFetching ? <Preloader/> :
                    <div className={s.image}>
                        <img src={profile.photos.large !== null ? profile.photos.large : avatar} alt="" />
                        {isOwner ?
                            <span className={s.fileUpload}>
                            <input type="file" onChange={onAvatarSelected} className={s.upload} id="file-input"/>
                            <label className={s.icon} htmlFor="file-input">
                                <UploadIcon/>
                            </label>
                        </span> : null}
                    </div>}
                <div className={s.buttons}>
                    {isOwner ?
                        <button disabled={!isEnabled} onClick={() => {
                            setEditMode(true);
                            setIsEnabled(false);
                        }} className={isEnabled ? s.edit : s.edit_disabled}>Edit profile</button> : null}
                </div>
            </div>
            <div className={editMode ? s.editing : s.info}>
                <div className={s.upper}>
                    <div className={s.name}>{profile.fullName}</div>
                    <span className={s.status}><ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/></span>
                </div>
                {editMode ?
                    <ProfileDataForm profile={profile} setEditMode={setEditMode} setIsEnabled={setIsEnabled} saveProfileInfo={saveProfileInfo}/> :
                    <ProfileData profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    );
};

export default ProfileInfo;