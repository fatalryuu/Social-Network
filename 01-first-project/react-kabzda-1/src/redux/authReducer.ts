import {authAPI, securityAPI} from "../api/api";

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

const authReducer = (state = initialState, action: any): InitialStateType => {
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

export const getAuthUserData = () => async (dispatch: any) => {
    let data = await authAPI.getMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, setError: any, captcha: any) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === 10)
            dispatch(getCaptchaUrl());
        setError("server", {message: data.messages});
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer