import {profileAPI, usersAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";

let initialState = {
    posts: [
        {
            id: 1,
            name: 'Nikita Ivanov',
            avatarUrl: null,
            date: '8 Jun 2022',
            message: 'Hi, how are you?',
            likesCount: 15
        },
        {
            id: 2,
            name: 'Tessa Tlu',
            avatarUrl: null,
            date: '27 Apr 2022',
            message: 'It\'s my first post',
            likesCount: 12
        }
    ] as Array<PostType>,
    profile: null as null | ProfileType,
    isFetching: true,
    status: "",
    amountOfFollowed: 0
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'profile/ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    name: state.profile?.fullName as string,
                    avatarUrl: state.profile?.photos.small as string | null,
                    date: 'now',
                    message: action.newPostText,
                    likesCount: 0
                }],
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
        case 'profile/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'profile/SET_AMOUNT_OF_FOLLOWED':
            return {
                ...state,
                amountOfFollowed: action.amountOfFollowed
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    addPost: (newPostText: string) => ({type: 'profile/ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
    deletePost: (postID: number) => ({type: 'profile/DELETE_POST', postID} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const),
    saveProfileInfoSuccess: (profileInfo: ProfileType) => ({
        type: 'profile/SAVE_PROFILE_INFO_SUCCESS',
        profileInfo
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'profile/TOGGLE_IS_FETCHING', isFetching} as const),
    setAmountOfFollowed: (amountOfFollowed: number) => ({
        type: 'profile/SET_AMOUNT_OF_FOLLOWED',
        amountOfFollowed
    } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getProfile = (userID: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await profileAPI.getProfile(userID);
    dispatch(actions.setUserProfile(data));
    dispatch(actions.toggleIsFetching(false));
    let userData = await usersAPI.getUsers(1, 10, "", true);
    dispatch(actions.setAmountOfFollowed(userData.totalCount));
}
export const getStatus = (userID: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await profileAPI.getStatus(userID);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setStatus(data));
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await profileAPI.updateStatus(status);
    dispatch(actions.toggleIsFetching(false));
    if (data.resultCode === 0)
        dispatch(actions.setStatus(status));
}
export const savePhoto = (photo: File): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await profileAPI.savePhoto(photo);
    dispatch(actions.toggleIsFetching(false));
    if (data.resultCode === 0)
        dispatch(actions.savePhotoSuccess(data.data.photos));
}
export const saveProfileInfo = (info: ProfileType): ThunkType => async (dispatch, getState) => {
    const userID = getState().auth.userID;
    const data = await profileAPI.saveProfileData(info);
    if (data.resultCode === 0 && userID)
        dispatch(getProfile(userID));
}
export default profileReducer