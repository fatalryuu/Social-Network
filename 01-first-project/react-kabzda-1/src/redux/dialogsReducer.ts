import {DialogType, MessageType} from "../types/types";

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Danik'},
        {id: 3, name: 'Arseniy'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Nikita'},
        {id: 6, name: 'Nastya'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'Yo'}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return  {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.newMessageBody}]
            };
        default:
            return state;
    }
}

type ActionTypes = SendMessageCreatorActionType;

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer