import React from 'react';
import s from "./Users.module.css";
import avatar from "../../img/user_avatar.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                <button onClick={() => {
                                    axios.delete(
                                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '209375cc-5609-47e9-acf1-6a72c60cfc4c'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0)
                                                props.unfollow(u.id)
                                        });

                                }} className={s.followed}>Unfollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '209375cc-5609-47e9-acf1-6a72c60cfc4c'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0)
                                                props.follow(u.id)
                                        });
                                }} className={s.unfollowed}>Follow</button>
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