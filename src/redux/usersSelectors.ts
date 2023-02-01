import {createSelector} from "@reduxjs/toolkit";
import {AppStateType} from "./store";

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}

export const getUsersIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}

export const getProfileIsFetching = (state: AppStateType) => {
    return state.profilePage.isFetching;
}

export const getFollowingInProcess = (state: AppStateType) => {
    return state.usersPage.followingInProcess;
}

export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter;
}


