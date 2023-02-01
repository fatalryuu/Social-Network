import {authAPI, ResultCodeForCaptcha, ResultCodes, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";

let initialState = {
    userID: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    setAuthUserData: (userID: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATA',
        data: {userID, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (url: string) => ({type: 'auth/GET_CAPTCHA_URL_SUCCESS', url} as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.getMe();
    if (data.resultCode === ResultCodes.Success) {
        let {id, login, email} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
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
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer