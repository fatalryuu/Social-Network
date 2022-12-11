import React from 'react';
import s from './Users.module.css'
import avatar from "../../img/user_avatar.jpg";

const Users = (props) => {
    debugger
    if (props.users.length === 0)
        props.setUsers([
            {
                id: 1,
                followed: false,
                avatar: avatar,
                fullName: 'Yulya Drapun',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: true,
                avatar: avatar,
                fullName: 'Yulya Drapu',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                followed: true,
                avatar: avatar,
                fullName: 'Yulya Drap',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4,
                followed: false,
                avatar: avatar,
                fullName: 'Yulya Dra',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 5,
                followed: false,
                avatar: avatar,
                fullName: 'Yulya Dr',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 6,
                followed: false,
                avatar: avatar,
                fullName: 'Yulya D',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 7,
                followed: false,
                avatar: avatar,
                fullName: 'Yulya L',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 8,
                followed: false,
                avatar: avatar,
                fullName: 'Yulya Li',
                status: 'Arseniy\'s cock is my god...',
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ]); //временно
    return (
        <div className={s.wrapper}>
            {props.users.map(u =>
                <div key={u.id} className={s.item}>
                    <span className={s.top}>
                        <a href=""><img src={u.avatar} alt="" className={s.avatar}/></a>
                        <div className={s.name}>{u.fullName}</div>
                        <div className={s.btn}>
                            {u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}} className={s.followed}>Unfollow</button> :
                                <button onClick={() => {props.follow(u.id)}} className={s.unfollowed}>Follow</button>
                            }
                        </div>
                    </span>
                    <div className={s.location}>{u.location.country}, {u.location.city}</div>
                    <div className={s.status}>{u.status}</div>
                </div>)
            }
        </div>
    );
};

export default Users;