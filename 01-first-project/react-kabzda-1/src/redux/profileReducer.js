import {profileAPI} from "../api/api";

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
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPostText, likesCount: 0}],
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
                profile: {...state.profile, photos: action.photos}
            }
        case SAVE_PROFILE_INFO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    aboutMe: action.data.aboutMe,
                    lookingForAJob: action.data.lookingForAJob,
                    lookingForAJobDescription: action.data.lookingForAJobDescription
                }
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postID) => ({type: DELETE_POST, postID});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const saveProfileInfoSuccess = (data) => ({type: SAVE_PROFILE_INFO_SUCCESS, data});

export const getProfile = (userID) => async (dispatch) => {
    let data = await profileAPI.getProfile(userID);
    dispatch(setUserProfile(data));
}
export const getStatus = (userID) => async (dispatch) => {
    let data = await profileAPI.getStatus(userID);
    dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0)
        dispatch(setStatus(status));
}
export const savePhoto = (photo) => async (dispatch) => {
    let data = await profileAPI.savePhoto(photo);
    if (data.resultCode === 0)
        dispatch(savePhotoSuccess(data.data.photos));
}
export const saveProfileInfo = (info) => async (dispatch, getState) => {
    const userID = getState().auth.userID;
    const data = await profileAPI.saveProfileData(info);
    if (data.resultCode === 0)
        dispatch(getProfile(userID));
        //dispatch(saveProfileInfoSuccess(data.data));
}
export default profileReducer