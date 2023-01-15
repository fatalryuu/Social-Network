import React from 'react';
import s from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div className={s.items}>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}/>
            {props.users.map(u => <User key={u.id} id={u.id} name={u.name} photos={u.photos}
                                        followingInProcess={props.followingInProcess} follow={props.follow}
                                        unfollow={props.unfollow} status={u.status}
                                        followed={u.followed}/>)
            }
            <div className={s.show_more}>
                <a href="#" className={s.link}>Show More</a>
            </div>

        </div>
    );
};

export default Users;