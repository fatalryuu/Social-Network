import {authAPI, ResultCodeForCaptcha, ResultCodes, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";
import {chatAPI, ChatMessageType, StatusType} from "../api/chat-api";
import messages from "../components/ChatPage/Chat/Messages/Messages";
import {Dispatch} from "redux";

let initialState = {
    messages: [] as ChatMessageType[],
    status:'pending' as StatusType
}

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'chat/SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        case 'chat/CHANGE_STATUS':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    setMessages: (messages: ChatMessageType[]) => ({type: 'chat/SET_MESSAGES', payload: messages} as const),
    changeStatus: (status: StatusType) => ({type: 'chat/CHANGE_STATUS', payload: status} as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandler = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.setMessages(messages));
        }
    }

    return _newMessageHandler;
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandler = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.changeStatus(status));
        }
    }

    return _statusChangedHandler;
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe('message', newMessageHandler(dispatch));
    chatAPI.subscribe('status', statusChangedHandler(dispatch));
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('message', newMessageHandler(dispatch));
    chatAPI.unsubscribe('status', statusChangedHandler(dispatch));
    chatAPI.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
}

export default chatReducer