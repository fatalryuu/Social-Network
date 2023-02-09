import React from 'react';
import {UserType} from "../../../../types/types";
import avatar from '../../../../img/post_avatar.png'
import s from '../../Profile.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UserType;
}

const FollowedUser: React.FC<PropsType> = ({user}) => {
    let name = user.name;
    if (user.name.length > 7) {
        name = user.name.slice(0, 6) + "...";
    }
    return (
        <div className={s.followed_user}>
            <div className={s.followed_avatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : avatar} alt=""/>
                </NavLink>
            </div>
            <div className={s.followed_name}>
                <NavLink to={'/profile/' + user.id}>
                    {name}
                </NavLink>
            </div>
        </div>
    );
};

export default FollowedUser;