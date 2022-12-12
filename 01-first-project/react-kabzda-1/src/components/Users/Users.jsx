import React from 'react';
import s from './Users.module.css'
import avatar from "../../img/user_avatar.jpg";
import axios from "axios";

const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }
    return (
        <div className={s.wrapper}>
            {props.users.map(u =>
                <div key={u.id} className={s.item}>
                    <div className={s.top}>
                        <a href=""><img src={u.photos.small != null ? u.photos.small : avatar} alt="" className={s.avatar}/></a>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.btn}>
                            {u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}} className={s.followed}>Unfollow</button> :
                                <button onClick={() => {props.follow(u.id)}} className={s.unfollowed}>Follow</button>
                            }
                        </div>
                    </div>
                    {/*<div className={s.location}>{u.location.country}, {u.location.city}</div>*/}
                    <div className={s.location}>{u.status != null ? u.status : 'BSUIR'}</div>
                </div>)
            }
        </div>
    );
};

export default Users;