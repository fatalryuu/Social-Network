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
        <div className={s.items}>
            {props.users.map(u =>
                <div key={u.id} className={s.item}>
                    <a href=""><img src={u.photos.small != null ? u.photos.small : avatar} alt="" className={s.avatar}/></a>
                    <div>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.btn_wrapper}>
                            {u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}} className={s.followed}>Unfollow</button> :
                                <button onClick={() => {props.follow(u.id)}} className={s.unfollowed}>Follow</button>
                            }
                        </div>
                        <div className={s.location}>{u.status != null ? u.status : 'BSUIR'}</div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;