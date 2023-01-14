import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userID, email, login, isAuth) => ({type: SET_USER_DATA, data: {userID, email, login, isAuth}});

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

export const login = (email, password, rememberMe, setError) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    setError("server", {message: data.messages});
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}

export default authReducer