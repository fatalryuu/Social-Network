import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    requestUsers,
    setCurrentPage,
    unfollow,
} from '../../redux/usersReducer.ts';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage,
    getFollowingInProcess,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors.ts";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {pageSize, requestUsers} = this.props;
        requestUsers(page, pageSize);
    }

    render() {
            return <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProcess={this.props.followingInProcess}
                />
            </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, requestUsers}),
    withAuthRedirect)(UsersContainer);