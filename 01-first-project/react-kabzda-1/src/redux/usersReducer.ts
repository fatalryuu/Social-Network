import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelper";
import {UserType} from "../types/types";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'usersUNFOLLOW';
const SET_USERS = 'usersSET_USERS';
const SET_CURRENT_PAGE = 'usersSET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersSET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'usersTOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROCESS = 'usersTOGGLE_FOLLOWING_IN_PROCESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: [] as Array<number> //array of users id
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROCESS:
            return {
                ...state,
                followingInProcess: action.isFetching ?
                    [...state.followingInProcess, action.userID] :
                    state.followingInProcess.filter(id => id !== action.userID)
            }
        default:
            return state;
    }
}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userID: number
}

export const followSuccess = (userID: number): FollowSuccessActionType => ({type: FOLLOW, userID});

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userID: number
}

export const unfollowSuccess = (userID: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userID});

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}

export const setCurrentPage = (page: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, page})

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type ToggleFollowingInProcessType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROCESS
    isFetching: boolean
    userID: number
}

export const toggleFollowingInProcess = (isFetching: boolean, userID: number): ToggleFollowingInProcessType => ({
    type: TOGGLE_FOLLOWING_IN_PROCESS,
    isFetching,
    userID
})

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch: any, userID: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingInProcess(true, userID));

    let data = await apiMethod(userID)
    if (data.resultCode === 0)
        dispatch(actionCreator(userID));
    dispatch(toggleFollowingInProcess(false, userID));
}

export const follow = (userID: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userID, usersAPI.follow, followSuccess);
}
export const unfollow = (userID: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userID, usersAPI.unfollow, unfollowSuccess);
}

export default usersReducer