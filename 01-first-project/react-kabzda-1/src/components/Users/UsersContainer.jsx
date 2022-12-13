import React from 'react';
import {connect} from "react-redux";
import Users from "./Users"
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => dispatch(followAC(userID)),
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;