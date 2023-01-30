import React from 'react';
import s from "./Users.module.css";
import User from "./User";
import {UserType} from "../../types/types";
import Paginator from "../Common/Paginator/Paginator";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/usersReducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    followingInProcess: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    users: Array<UserType>
}

const Users: React.FC<PropsType> = (props) => {
    return (
        <div className={s.items}>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
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