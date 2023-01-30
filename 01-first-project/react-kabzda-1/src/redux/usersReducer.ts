import {ResultCodes, usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objectHelper";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";
import {Dispatch} from "redux";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: [] as Array<number> //array of users id
}

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case 'users/SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'users/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'users/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'users/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'users/TOGGLE_FOLLOWING_IN_PROCESS':
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

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    followSuccess: (userID: number) => ({type: 'users/FOLLOW', userID} as const),
    unfollowSuccess: (userID: number) => ({type: 'users/UNFOLLOW', userID} as const),
    setUsers: (users: Array<UserType>) => ({type: 'users/SET_USERS', users} as const),
    setTotalUsersCount: (totalCount: number) => ({type: 'users/SET_TOTAL_USERS_COUNT', totalCount} as const),
    setCurrentPage: (page: number) => ({type: 'users/SET_CURRENT_PAGE', page} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'users/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingInProcess: (isFetching: boolean, userID: number) => ({
        type: 'users/TOGGLE_FOLLOWING_IN_PROCESS',
        isFetching,
        userID
    } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userID: number, apiMethod: any,
                                   actionCreator: (userID: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProcess(true, userID));

    let data = await apiMethod(userID)
    if (data.resultCode === ResultCodes.Success)
        dispatch(actionCreator(userID));
    dispatch(actions.toggleFollowingInProcess(false, userID));
}

export const follow = (userID: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, usersAPI.follow, actions.followSuccess);
}
export const unfollow = (userID: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userID, usersAPI.unfollow, actions.unfollowSuccess);
}

export default usersReducer