import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

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
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: action.newPostText, likesCount: 0}],
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postID)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        case SAVE_PROFILE_INFO_SUCCESS:
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

type ActionTypes = AddPostActionType | SetUserProfileActionType |
    SetStatusActionType | DeletePostActionType | SavePhotoSuccessActionType |
    SaveProfileInfoSuccessActionType;

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postID: number
}

export const deletePost = (postID: number): DeletePostActionType => ({type: DELETE_POST, postID});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

type SaveProfileInfoSuccessActionType = {
    type: typeof SAVE_PROFILE_INFO_SUCCESS,
    profileInfo: ProfileType
}

export const saveProfileInfoSuccess = (profileInfo: ProfileType): SaveProfileInfoSuccessActionType => ({type: SAVE_PROFILE_INFO_SUCCESS, profileInfo});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const getProfile = (userID: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userID);
    dispatch(setUserProfile(data));
}
export const getStatus = (userID: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userID);
    dispatch(setStatus(data));
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0)
        dispatch(setStatus(status));
}
export const savePhoto = (photo: any): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(photo);
    if (data.resultCode === 0)
        dispatch(savePhotoSuccess(data.data));
}
export const saveProfileInfo = (info: ProfileType): ThunkType => async (dispatch, getState) => {
    const userID = getState().auth.userID;
    const data = await profileAPI.saveProfileData(info);
    if (data.resultCode === 0 && userID)
        dispatch(getProfile(userID));
}
export default profileReducer