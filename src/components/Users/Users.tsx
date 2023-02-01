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
} from "../../redux/usersSelectors";
import {AppDispatch} from "../../redux/store";
import {useNavigate, useSearchParams} from "react-router-dom";

type PropsType = {

}

type QueryParamsType = {
    term?: string
    friend?: string
    page?: string
}

const Users: React.FC<PropsType> = (props) => {
    const totalUsersCount = useSelector(getTotalUsersCount);
    const users = useSelector(getUsers);
    const pageSize = useSelector(getPageSize);
    const currentPage = useSelector(getCurrentPage);
    const followingInProcess = useSelector(getFollowingInProcess);
    const filter = useSelector(getUsersFilter);

    const dispatch: AppDispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const result: any = {}
        // @ts-ignore
        for (const [key, value] of searchParams.entries()) {
            let newValue: any = +value;
            if (value === "true") { //for friend
                newValue = true
            } else if (value === "false") {
                newValue = false
            }
            if (isNaN(newValue)) { //for term
                newValue = value
            }
            result[key] = newValue //for page & other
        }

        let actualPage = result.page || currentPage;
        let term = result.term || filter.term;

        let friend = result.friend || filter.friend;
        if (result.friend === false) {
            friend = result.friend;
        }

        dispatch(requestUsers(actualPage, pageSize, term, friend));
    }, []);

    useEffect(() => {
        let urlQuery = "";
        if (!!filter.term)
            urlQuery += `&term=${filter.term}`;
        if (filter.friend !== null)
            urlQuery += `&friend=${filter.friend}`
        if (currentPage !== 1)
            urlQuery += `&page=${currentPage}`

        setSearchParams(urlQuery);
    }, [filter, currentPage]);

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
        <div className={s.items}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.map(u => <User key={u.id} id={u.id} name={u.name} photos={u.photos}
                                        followingInProcess={followingInProcess} follow={follow}
                                        unfollow={unfollow} status={u.status}
                                        followed={u.followed}/>)
            }
            <div className={s.show_more}>
                <a href="#" className={s.link}>Show More</a>
            </div>

        </div>
    );
};

export default Users;