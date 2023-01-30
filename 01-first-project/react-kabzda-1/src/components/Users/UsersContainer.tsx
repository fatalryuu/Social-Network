import React from 'react';
import {connect} from 'react-redux';
import {
    FilterType,
    follow,
    requestUsers,
    unfollow,
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage,
    getFollowingInProcess,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from "../../redux/usersSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    followingInProcess: Array<number>
    users: Array<UserType>
    filter: FilterType
}

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number, term: string, filter: null | boolean) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize, "", null);
    }

    onPageChanged = (page: number) => {
        const {pageSize, requestUsers, filter} = this.props;
        requestUsers(page, pageSize, filter.term, filter.friend);
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize, requestUsers} = this.props;
        console.log(filter.term);
        requestUsers(1, pageSize, filter.term, filter.friend);
    }

    render() {
            return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    onFilterChanged={this.onFilterChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProcess={this.props.followingInProcess}
                />
            </>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state),
        filter: getUsersFilter(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {follow, unfollow, requestUsers}),
    withAuthRedirect)(UsersContainer);