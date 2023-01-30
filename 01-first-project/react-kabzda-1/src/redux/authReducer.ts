import {authAPI, ResultCodeForCaptcha, ResultCodes, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userID: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
}

type ActionTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessType;

type SetAuthUserDataActionDataType = {
    userID: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataActionDataType
}

export const setAuthUserData = (userID: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userID, email, login, isAuth}
});

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    url: string
}

export const getCaptchaUrlSuccess = (url: string): GetCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, url});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.getMe();
    if (data.resultCode === ResultCodes.Success) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, setError: (dest: string, errors: Object) => void, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired)
            dispatch(getCaptchaUrl());
        setError("server", {message: data.messages});
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodes.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer