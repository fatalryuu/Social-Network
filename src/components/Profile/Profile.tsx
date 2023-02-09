import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";
import {useSelector} from "react-redux";
import {getAmountOfFollowed, getFollowedUsers} from "../../redux/selectors";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import FollowedUser from "./ProfileInfo/FollowedUser/FollowedUser";

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
    const followedUsers = useSelector(getFollowedUsers);
    let usersToShow = [];
    let indexes = [] as number[];
    if (followedUsers.length > 6) {
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * followedUsers.length);
            while (indexes.includes(index)) {
                index = Math.floor(Math.random() * followedUsers.length);
            }
            indexes.push(index);
            usersToShow.push(followedUsers[index]);
        }
    } else {
        followedUsers.map(u => usersToShow.push(u));
    }
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto}
                         saveProfileInfo={props.saveProfileInfo}/>
            {props.isOwner ? <div className={s.lower}>
                <div className={usersToShow.length < 4 ? s.amount_wrapper_low : s.amount_wrapper_high}>
                    <div className={s.amount_string}>
                        <div className={s.upper}>
                            <span className={s.followed_string}>Followed </span>
                            <span className={s.amount}>{amountOfFollowed}</span>
                        </div>
                        <div className={usersToShow.length < 4 ? s.followed_users_low : s.followed_users_high}>
                            {usersToShow.map(u => <FollowedUser key={u.id} user={u}/>)}
                        </div>
                    </div>
                </div>
                <MyPosts/>
            </div> : null}
        </div>
    );
};

export default Profile;