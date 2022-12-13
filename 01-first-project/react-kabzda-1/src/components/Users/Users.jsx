import React from 'react';
import s from "./Users.module.css";
import avatar from "../../img/user_avatar.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    return (
        <div className={s.items}>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.selected_page : s.page} onClick={() => props.onPageChanged(p)}>{p} </span>
                })}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={s.item}>
                    <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : avatar} alt="" className={s.avatar}/></NavLink>
                    <div>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.btn_wrapper}>
                            {u.followed ?
                                <button onClick={() => props.unfollow(u.id)} className={s.followed}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)} className={s.unfollowed}>Follow</button>
                            }
                        </div>
                        <div className={s.location}>{u.status != null ? u.status : 'BSUIR'}</div>
                    </div>
                </div>)
            }
            <div className={s.show_more}>
                <a href="#" className={s.link}>Show More</a>
            </div>

        </div>
    );
};

export default Users;