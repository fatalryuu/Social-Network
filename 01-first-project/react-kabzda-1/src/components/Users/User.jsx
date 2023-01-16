import React from 'react';
import s from "./Users.module.css";
import avatar from "../../img/user_avatar.jpg";
import {NavLink} from "react-router-dom";

const User = ({id, name, photos, followingInProcess, follow, unfollow, status, followed}) => {
    return (
        <div key={id} className={s.item}>
            <NavLink to={'/profile/' + id}><img src={photos.small != null ? photos.small : avatar} alt=""
                                                className={s.avatar}/></NavLink>
            <div>
                <div className={s.name}>{name}</div>
                <div className={s.btn_wrapper}>
                    {followed ?
                        <button disabled={followingInProcess.some(thisID => thisID === id)} onClick={() => unfollow(id)}
                                className={s.followed}>Unfollow</button> :
                        <button disabled={followingInProcess.some(thisID => thisID === id)}
                                onClick={() => follow(id)} className={s.unfollowed}>Follow</button>
                    }
                </div>
                <div className={s.status}>{status != null ? status : 'No status'}</div>
            </div>
        </div>
    );
};

export default User;