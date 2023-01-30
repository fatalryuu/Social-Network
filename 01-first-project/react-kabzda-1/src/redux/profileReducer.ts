import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_INFO_SUCCESS = 'profile/SAVE_PROFILE_INFO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 12}
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    status: ""
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'profile/ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: action.newPostText, likesCount: 0}],
            };
        case 'profile/SET_STATUS':
            return {
                ...state,
                status: action.status
            };
        case 'profile/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'profile/DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postID)
            }
        case 'profile/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        case 'profile/SAVE_PROFILE_INFO_SUCCESS':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    aboutMe: action.profileInfo.aboutMe,
                    lookingForAJob: action.profileInfo.lookingForAJob,
                    lookingForAJobDescription: action.profileInfo.lookingForAJobDescription
                } as ProfileType
            }
        default:
            return state;
    }
}

type ActionTypes = InferActionsTypes<typeof actions>;

export const actions = {
    addPost: (newPostText: string) => ({type: 'profile/ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
    deletePost: (postID: number) => ({type: 'profile/DELETE_POST', postID} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const),
    saveProfileInfoSuccess: (profileInfo: ProfileType) => ({type: 'profile/SAVE_PROFILE_INFO_SUCCESS', profileInfo} as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const getProfile = (userID: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userID);
    dispatch(actions.setUserProfile(data));
}
export const getStatus = (userID: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userID);
    dispatch(actions.setStatus(data));
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0)
        dispatch(actions.setStatus(status));
}
export const savePhoto = (photo: any): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(photo);
    if (data.resultCode === 0)
        dispatch(actions.savePhotoSuccess(data.data));
}
export const saveProfileInfo = (info: ProfileType): ThunkType => async (dispatch, getState) => {
    const userID = getState().auth.userID;
    const data = await profileAPI.saveProfileData(info);
    if (data.resultCode === 0 && userID)
        dispatch(getProfile(userID));
}
export default profileReducer