import {authAPI, ResultCodeForCaptcha, ResultCodes, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";
import {chatAPI, ChatMessageType} from "../api/chat-api";
import messages from "../components/ChatPage/Chat/Messages/Messages";
import {Dispatch} from "redux";

let initialState = {
    messages: [] as ChatMessageType[],
}

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'chat/SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    setMessages: (messages: ChatMessageType[]) => ({type: 'chat/SET_MESSAGES', payload: messages} as const),
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

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe(newMessageHandler(dispatch));
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandler(dispatch));
    chatAPI.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
}

export default chatReducer