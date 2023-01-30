import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type ActionTypes = InferActionsTypes<typeof actions>;
export const actions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'} as const)
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(actions.initializedSuccess());
    });
}

export default appReducer;