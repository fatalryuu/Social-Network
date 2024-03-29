import React, {useEffect} from 'react';
import s from "./Users.module.css";
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow as followThunk, requestUsers, unfollow as unfollowThunk} from "../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProcess,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/selectors";
import {AppDispatch} from "../../redux/store";

type PropsType = {

}

const Users: React.FC<PropsType> = (props) => {
    const totalUsersCount = useSelector(getTotalUsersCount);
    const users = useSelector(getUsers);
    const pageSize = useSelector(getPageSize);
    const currentPage = useSelector(getCurrentPage);
    const followingInProcess = useSelector(getFollowingInProcess);
    const filter = useSelector(getUsersFilter);

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(1, pageSize, "", null));
    }, []);

    const onPageChanged = (page: number) => {
        dispatch(requestUsers(page, pageSize, filter.term, filter.friend));
    };

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter.term, filter.friend));
    }

    const follow = (userID: number) => {
        dispatch(followThunk(userID));
    }
    const unfollow = (userID: number) => {
        dispatch(unfollowThunk(userID));
    }

    return (
        <div className={s.wrapper}>
            <div className={s.search}>
                <UsersSearchForm onFilterChanged={onFilterChanged}/>
            </div>
            <div className={s.users}>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                           onPageChanged={onPageChanged}/>
                {users.map(u => <User key={u.id} id={u.id} name={u.name} photos={u.photos}
                                      followingInProcess={followingInProcess} follow={follow}
                                      unfollow={unfollow} status={u.status}
                                      followed={u.followed}/>)
                }
            </div>
        </div>
    );
};

export default Users;