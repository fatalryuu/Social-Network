import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";
import {useSelector} from "react-redux";
import {getAmountOfFollowed} from "../../redux/selectors";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string | null) => void
    savePhoto: (photo: any) => void
    saveProfileInfo: (info: ProfileType) => void
}

const Profile: React.FC<PropsType> = (props) => {
    const amountOfFollowed = useSelector(getAmountOfFollowed);
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto}
                         saveProfileInfo={props.saveProfileInfo}/>
            {props.isOwner ? <div className={s.lower}>
                <div className={s.amount_wrapper}>
                    <div className={s.amount_string}><span className={s.followed}>Followed </span> <span className={s.amount}>{amountOfFollowed}</span></div>
                </div>
                <MyPosts />
            </div> : null}
        </div>
    );
};

export default Profile;